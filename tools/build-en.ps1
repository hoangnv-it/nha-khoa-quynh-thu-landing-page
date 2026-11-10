<#
  build-en.ps1
  Tạo bản tiếng Anh (public/en/) từ bản tiếng Việt + bảng dịch tools/i18n/en.txt.
  Thêm 2026-11-10.

  - Trang tiếng Việt là bản gốc. KHÔNG sửa tay file trong public/en/: sửa bản tiếng Việt
    hoặc bảng dịch, rồi chạy lại script này.
  - Chỉ dịch nội dung trang; chú thích <!-- --> và <script> giữ nguyên.
  - Tự đổi: lang, đường dẫn ảnh/CSS/JS, link giữa các trang, canonical, og:url, og:locale,
    nút đổi ngôn ngữ, JSON-LD (tạo lại bằng tiếng Anh, FAQPage lấy từ phần hỏi đáp đã dịch).
  - Kiểm tra cuối: còn chữ tiếng Việt chưa dịch (ngoài tên riêng) thì báo và thoát mã 1.
    Khi đó thêm dòng VI/EN vào tools/i18n/en.txt rồi chạy lại.

  Cách chạy (từ thư mục dự án):
    powershell -ExecutionPolicy Bypass -File tools\build-en.ps1
#>
$ErrorActionPreference = 'Stop'

$root = Split-Path -Parent $PSScriptRoot
$pub  = Join-Path $root 'public'
$utf8 = New-Object System.Text.UTF8Encoding($false)
$BASE = ([System.IO.File]::ReadAllText((Join-Path $PSScriptRoot 'site-url.txt'), $utf8)).Trim().TrimEnd('/') + '/'

# Trang dịch vụ: tên file tiếng Việt -> tên file tiếng Anh (đổi ở đây thì đổi cả data-alt trong trang tiếng Việt)
$SLUG = [ordered]@{
  'kham-tre-em'  = 'kids-dentistry'
  'rang-su'      = 'porcelain-crowns'
  'dieu-tri-tuy' = 'root-canal'
  'nieng-rang'   = 'braces'
  'tay-trang'    = 'teeth-whitening'
  'nho-rang'     = 'tooth-extraction'
}
# Tên + mô tả dịch vụ cho JSON-LD tiếng Anh
$SVC_EN = @{
  'kids-dentistry'   = @("Kids' dentistry", "Checkups, fillings, root canals, baby tooth extractions and early orthodontics for kids.")
  'porcelain-crowns' = @('Porcelain crowns', 'Porcelain crowns, bridges, veneers, bonded porcelain and removable dentures.')
  'root-canal'       = @('Root canal treatment', 'Root canals, pulp preservation, cavity treatment and tooth-colored fillings.')
  'braces'           = @('Braces', 'Metal and ceramic braces, clear aligners and early orthodontics for kids.')
  'teeth-whitening'  = @('Teeth whitening', 'In-office whitening with blue light (LED, Plasma) and the Beyond II system.')
  'tooth-extraction' = @('Tooth extraction and wisdom teeth', 'Tooth extractions and surgical removal of angled, impacted or sideways wisdom teeth, with a CBCT scan first.')
}
# Tên riêng được phép còn dấu tiếng Việt trong bản tiếng Anh
$KEEP = @('Công ty TNHH MTV Nha khoa Quỳnh Thư', 'Nha Khoa Quỳnh Thư', 'Lê Quỳnh Thư', 'Dr. Thư', 'Tiếng Việt',
          'Láng H.', 'Hương T.', 'Kim Thoa Q.', 'Phương Anh N.', 'Thủy Tiên T.')

# ---------- Bảng dịch ----------
$pairs = @{}
$vi = $null
$n = 0
foreach ($line in [System.IO.File]::ReadAllLines((Join-Path $PSScriptRoot 'i18n\en.txt'), $utf8)) {
  $n++
  if ($line.StartsWith('VI: ')) { $vi = $line.Substring(4) }
  elseif ($line.StartsWith('EN: ')) {
    if ($null -eq $vi) { throw "en.txt dòng ${n}: có EN mà thiếu VI ở trên" }
    if ($pairs.ContainsKey($vi)) { Write-Host "Cảnh báo: en.txt có 2 dòng VI giống nhau: $vi" }
    $pairs[$vi] = $line.Substring(4)
    $vi = $null
  }
}
# Thay 1 lượt bằng regex, cụm dài ưu tiên trước: chữ đã dịch không bị dịch lại lần nữa.
$keys = $pairs.Keys | Sort-Object { $_.Length } -Descending
$rx = New-Object System.Text.RegularExpressions.Regex ((($keys | ForEach-Object { [regex]::Escape($_) }) -join '|'))
$eval = [System.Text.RegularExpressions.MatchEvaluator] { param($m) $pairs[$m.Value] }

function Translate([string]$t) {
  $parts = [regex]::Split($t, '(<!--[\s\S]*?-->|<script[\s\S]*?</script>)')
  for ($i = 0; $i -lt $parts.Length; $i++) {
    if ($parts[$i].StartsWith('<!--') -or $parts[$i].StartsWith('<script')) { continue }
    $parts[$i] = $rx.Replace($parts[$i], $eval)
  }
  return ($parts -join '')
}

function Clean([string]$h) {
  $x = [regex]::Replace($h, '<[^>]+>', ' ')
  $x = [System.Net.WebUtility]::HtmlDecode($x)
  return ([regex]::Replace($x, '\s+', ' ')).Trim()
}
function Get-Faq([string]$t) {
  $out = @()
  foreach ($m in [regex]::Matches($t, '(?s)<details>\s*<summary>(.*?)</summary>(.*?)</details>')) {
    $out += [ordered]@{ '@type' = 'Question'; 'name' = (Clean $m.Groups[1].Value); 'acceptedAnswer' = [ordered]@{ '@type' = 'Answer'; 'text' = (Clean $m.Groups[2].Value) } }
  }
  return ,$out
}
function ToJson($o) { ($o | ConvertTo-Json -Depth 12) -replace '\\u0026', '&' -replace '\\u0027', "'" }
$AREA = @('Hoa Xuan, Da Nang', 'Hoa Quy, Da Nang', 'Cam Le, Da Nang', 'Ngu Hanh Son, Da Nang') | ForEach-Object { [ordered]@{ '@type' = 'Place'; 'name' = $_ } }

function Set-Head([string]$t, [string]$url, [string]$alt) {
  $t = $t -replace '<html lang="vi" data-alt="[^"]*">', ('<html lang="en" data-alt="' + $alt + '">')
  $t = $t -replace '(<link rel="canonical" href=")[^"]*', ('${1}' + $url)
  $t = $t -replace '(<meta property="og:url" content=")[^"]*', ('${1}' + $url)
  $t = $t.Replace('<meta property="og:locale" content="vi_VN">', '<meta property="og:locale" content="en_US">')
  # Nút đổi ngôn ngữ: ở bản tiếng Anh trỏ về bản tiếng Việt
  $t = [regex]::Replace($t, '<a class="lang-switch"[^>]*>', ('<a class="lang-switch" href="' + $alt + '" hreflang="vi" lang="vi" data-lang="vi" aria-label="Tiếng Việt">'))
  $t = $t.Replace('<span class="lang-switch__code">EN</span>', '<span class="lang-switch__code">VI</span>')
  $t = $t.Replace('<use href="#flag-gb"/></svg></span><span class="lang-switch__code">', '<use href="#flag-vn"/></svg></span><span class="lang-switch__code">')
  # Bỏ JSON-LD tiếng Việt (tạo lại bằng tiếng Anh ở dưới)
  $t = [regex]::Replace($t, '(?s)\s*<script type="application/ld\+json">.*?</script>', '')
  return $t
}
function Add-JsonLd([string]$t, $graph) {
  $json = ToJson ([ordered]@{ '@context' = 'https://schema.org'; '@graph' = $graph })
  $block = "  <!-- JSON-LD tiếng Anh: tạo tự động bởi tools/build-en.ps1 -->`n  <script type=`"application/ld+json`">`n$json`n  </script>`n</head>"
  $i = $t.IndexOf('</head>')
  return $t.Substring(0, $i) + $block + $t.Substring($i + 7)
}
$BANNER = "<!-- File tạo tự động bởi tools/build-en.ps1 từ bản tiếng Việt + tools/i18n/en.txt. KHÔNG sửa tay file này. -->`n"

$enDir  = Join-Path $pub 'en'
$svcDir = Join-Path $enDir 'services'
New-Item -ItemType Directory -Force -Path $svcDir | Out-Null
$built = @()

# ---------- Trang chủ ----------
$t = [System.IO.File]::ReadAllText((Join-Path $pub 'index.html'), $utf8)
$t = Translate $t
$url = $BASE + 'en/'
$t = Set-Head $t $url '../index.html'
$t = [regex]::Replace($t, '(src|href)="(?=assets/|style\.css|script\.js)', '$1="../')
foreach ($k in $SLUG.Keys) { $t = $t.Replace('href="dich-vu/' + $k + '.html"', 'href="services/' + $SLUG[$k] + '.html"') }
$graph = @([ordered]@{
  '@type' = 'WebPage'; '@id' = $url + '#webpage'; 'url' = $url; 'inLanguage' = 'en'
  'name' = (Clean ([regex]::Match($t, '<title>(.*?)</title>').Groups[1].Value))
  'about' = [ordered]@{ '@id' = $BASE + '#organization' }
})
$faq = Get-Faq $t
if ($faq.Count) { $graph += [ordered]@{ '@type' = 'FAQPage'; '@id' = $url + '#hoi-dap'; 'inLanguage' = 'en'; 'mainEntity' = $faq } }
$t = (Add-JsonLd $t $graph).Replace('<!DOCTYPE html>', '<!DOCTYPE html>' + "`n" + $BANNER.TrimEnd())
$out = Join-Path $enDir 'index.html'
[System.IO.File]::WriteAllText($out, $t, $utf8)
$built += $out

# ---------- 6 trang dịch vụ ----------
foreach ($k in $SLUG.Keys) {
  $en = $SLUG[$k]
  $t = [System.IO.File]::ReadAllText((Join-Path $pub "dich-vu\$k.html"), $utf8)
  $t = Translate $t
  $url = $BASE + "en/services/$en"
  $t = Set-Head $t $url "../../dich-vu/$k.html"
  $t = [regex]::Replace($t, '(src|href)="\.\./(?=assets/|style\.css|script\.js)', '$1="../../')
  foreach ($k2 in $SLUG.Keys) { $t = $t.Replace('href="' + $k2 + '.html"', 'href="' + $SLUG[$k2] + '.html"') }
  $name = $SVC_EN[$en][0]
  $graph = @(
    [ordered]@{
      '@type' = 'BreadcrumbList'
      'itemListElement' = @(
        [ordered]@{ '@type' = 'ListItem'; 'position' = 1; 'name' = 'Home'; 'item' = $BASE + 'en/' },
        [ordered]@{ '@type' = 'ListItem'; 'position' = 2; 'name' = 'Services'; 'item' = $BASE + 'en/#dich-vu' },
        [ordered]@{ '@type' = 'ListItem'; 'position' = 3; 'name' = $name; 'item' = $url }
      )
    },
    [ordered]@{
      '@type' = 'Service'; '@id' = "$url#dich-vu"; 'name' = "$name in Hoa Xuan, Da Nang"; 'serviceType' = $name
      'description' = $SVC_EN[$en][1]; 'url' = $url; 'inLanguage' = 'en'
      'provider' = @([ordered]@{ '@id' = $BASE + '#co-so-1' }, [ordered]@{ '@id' = $BASE + '#co-so-2' })
      'areaServed' = $AREA
    }
  )
  $faq = Get-Faq $t
  if ($faq.Count) { $graph += [ordered]@{ '@type' = 'FAQPage'; '@id' = "$url#hoi-dap"; 'inLanguage' = 'en'; 'mainEntity' = $faq } }
  $t = (Add-JsonLd $t $graph).Replace('<!DOCTYPE html>', '<!DOCTYPE html>' + "`n" + $BANNER.TrimEnd())
  $out = Join-Path $svcDir "$en.html"
  [System.IO.File]::WriteAllText($out, $t, $utf8)
  $built += $out
}

# ---------- Kiểm tra: còn chữ tiếng Việt chưa dịch? ----------
$VI_CHARS = 'àáảãạăằắẳẵặâầấẩẫậđèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵ'
$bad = 0
foreach ($f in $built) {
  $x = [System.IO.File]::ReadAllText($f, $utf8)
  $x = [regex]::Replace($x, '(?s)<!--.*?-->|<script.*?</script>|<symbol.*?</symbol>', ' ')
  foreach ($k in $KEEP) { $x = $x.Replace($k, ' ') }
  $rel = $f.Substring($pub.Length + 1)
  foreach ($m in [regex]::Matches($x, '[^<>"]*[' + $VI_CHARS + '][^<>"]*', 'IgnoreCase')) {
    Write-Host ("CHƯA DỊCH  {0}: {1}" -f $rel, $m.Value.Trim())
    $bad++
  }
  foreach ($m in [regex]::Matches($x, '[^<>]{0,40}[–—][^<>]{0,40}')) { Write-Host ("DẤU GẠCH DÀI  {0}: {1}" -f $rel, $m.Value.Trim()); $bad++ }
  Write-Host ("Đã tạo: {0}" -f $rel)
}
if ($bad -gt 0) {
  Write-Host ''
  Write-Host ("LỖI: còn {0} chỗ chưa dịch. Thêm dòng VI/EN vào tools\i18n\en.txt rồi chạy lại." -f $bad)
  exit 1
}
Write-Host 'Xong: bản tiếng Anh đã cập nhật.'
