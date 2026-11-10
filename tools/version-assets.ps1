<#
  version-assets.ps1
  Gắn ?v=<mã MD5 8 ký tự> cho style.css, script.js và mọi file trong public/assets/
  ở các link trong public/index.html, public/404.html, public/dich-vu/*.html và public/en/**/*.html
  (src, srcset, href, poster, og:image, JSON-LD...).

  Thêm 2026-11-10: gắn mã cả cho ảnh gọi trong style.css (url("assets/...")),
  làm TRƯỚC khi tính mã của style.css, để đổi ảnh thì style.css cũng đổi mã.

  - Chạy được nhiều lần: thay mã cũ, không gắn chồng mã mới.
  - Tự chạy trước mỗi lần commit (git hook .githooks/pre-commit). Vẫn có thể chạy tay.
  - -Check: chỉ kiểm tra, không sửa file. Thoát mã 1 nếu còn link chưa đúng mã.

  Cách chạy (từ thư mục dự án):
    powershell -ExecutionPolicy Bypass -File tools\version-assets.ps1
    powershell -ExecutionPolicy Bypass -File tools\version-assets.ps1 -Check
#>
param([switch]$Check)

$ErrorActionPreference = 'Stop'
$stale = @()

$root   = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root 'public'
$pages  = @('index.html', '404.html') | ForEach-Object { Join-Path $public $_ }
# Các trang dịch vụ (dùng đường dẫn ../assets/..., script vẫn khớp vì tìm theo phần "assets/...")
$svcDir = Join-Path $public 'dich-vu'
if (Test-Path $svcDir) { $pages += Get-ChildItem $svcDir -Filter '*.html' -File | ForEach-Object { $_.FullName } }
# Bản tiếng Anh (public/en/, tạo bởi tools/build-en.ps1; thêm 2026-11-10)
$enDir = Join-Path $public 'en'
if (Test-Path $enDir) { $pages += Get-ChildItem $enDir -Recurse -Filter '*.html' -File | ForEach-Object { $_.FullName } }
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Get-Rel($full) { $full.Substring($public.Length).TrimStart('\', '/').Replace('\', '/') }
function Get-Hash8($full) { (Get-FileHash -Algorithm MD5 -LiteralPath $full).Hash.Substring(0, 8).ToLower() }

# Gắn ?v= cho mọi đường dẫn trong $map xuất hiện trong 1 file văn bản
function Update-Links($path, $map) {
  $text = [System.IO.File]::ReadAllText($path, $utf8NoBom)
  $orig = $text
  $count = 0
  foreach ($rel in $map.Keys) {
    # Khớp đúng đường dẫn (không dính vào tên file dài hơn), kèm ?v=xxxxxxxx cũ nếu có.
    $pattern = '(?<![A-Za-z0-9_.\-])' + [regex]::Escape($rel) + '(\?v=[0-9a-f]{8})?(?![A-Za-z0-9_.\-])'
    $replacement = $rel + '?v=' + $map[$rel]
    $found = [regex]::Matches($text, $pattern)
    if ($found.Count -gt 0) {
      $count += $found.Count
      $text = [regex]::Replace($text, $pattern, [System.Text.RegularExpressions.MatchEvaluator] { param($m) $replacement })
    }
  }
  $name = Get-Rel $path
  if ($text -ne $orig) {
    if ($Check) {
      $script:stale += $name
      Write-Host ("{0}: CHƯA đúng mã ({1} link)" -f $name, $count)
    } else {
      [System.IO.File]::WriteAllText($path, $text, $utf8NoBom)
      Write-Host ("{0}: đã cập nhật ({1} link)" -f $name, $count)
    }
  } else {
    Write-Host ("{0}: không có gì thay đổi ({1} link)" -f $name, $count)
  }
}

# 1. Mã cho các file trong public/assets/
$map = @{}
$assetsDir = Join-Path $public 'assets'
if (Test-Path $assetsDir) {
  Get-ChildItem $assetsDir -Recurse -File | Where-Object { $_.Name -ne '.gitkeep' } | ForEach-Object { $map[(Get-Rel $_.FullName)] = Get-Hash8 $_.FullName }
}

# 2. Gắn mã cho ảnh gọi trong style.css (TRƯỚC khi tính mã style.css)
$css = Join-Path $public 'style.css'
if (Test-Path $css) { Update-Links $css $map }

# 3. Mã cho style.css và script.js (tính sau bước 2)
foreach ($name in @('style.css', 'script.js')) {
  $p = Join-Path $public $name
  if (Test-Path $p) { $map[$name] = Get-Hash8 $p }
}

# 4. Thay trong từng trang HTML
foreach ($page in $pages) {
  if (Test-Path $page) { Update-Links $page $map }
}

Write-Host ''
Write-Host 'Mã hiện tại:'
$map.GetEnumerator() | Sort-Object Name | ForEach-Object { Write-Host ("  {0}  {1}" -f $_.Value, $_.Name) }

if ($Check -and $stale.Count -gt 0) {
  Write-Host ''
  Write-Host ("LỖI: {0} file còn link chưa đúng mã. Chạy tools\version-assets.ps1 (không có -Check) để sửa." -f $stale.Count)
  exit 1
}
