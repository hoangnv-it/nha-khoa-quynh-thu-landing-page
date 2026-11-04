<#
  version-assets.ps1
  Gắn ?v=<mã MD5 8 ký tự> cho style.css, script.js và mọi file trong public/assets/
  ở các link trong public/index.html, public/404.html và public/dich-vu/*.html
  (src, srcset, href, poster, og:image, JSON-LD...).

  - Chạy được nhiều lần: thay mã cũ, không gắn chồng mã mới.
  - Chạy sau mỗi lần sửa CSS, JS hoặc thay ảnh, TRƯỚC khi đẩy lên GitHub.

  Cách chạy (từ thư mục dự án):
    powershell -ExecutionPolicy Bypass -File tools\version-assets.ps1
#>

$ErrorActionPreference = 'Stop'

$root   = Split-Path -Parent $PSScriptRoot
$public = Join-Path $root 'public'
$pages  = @('index.html', '404.html') | ForEach-Object { Join-Path $public $_ }
# Các trang dịch vụ (dùng đường dẫn ../assets/..., script vẫn khớp vì tìm theo phần "assets/...")
$svcDir = Join-Path $public 'dich-vu'
if (Test-Path $svcDir) { $pages += Get-ChildItem $svcDir -Filter '*.html' -File | ForEach-Object { $_.FullName } }
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

# 1. Danh sách file cần gắn mã: đường dẫn tương đối so với public/ (dùng dấu /)
$files = @()
foreach ($name in @('style.css', 'script.js')) {
  $p = Join-Path $public $name
  if (Test-Path $p) { $files += Get-Item $p }
}
$assetsDir = Join-Path $public 'assets'
if (Test-Path $assetsDir) {
  $files += Get-ChildItem $assetsDir -Recurse -File | Where-Object { $_.Name -ne '.gitkeep' }
}

$map = @{}
foreach ($f in $files) {
  $rel  = $f.FullName.Substring($public.Length).TrimStart('\', '/').Replace('\', '/')
  $hash = (Get-FileHash -Algorithm MD5 -LiteralPath $f.FullName).Hash.Substring(0, 8).ToLower()
  $map[$rel] = $hash
}

# 2. Thay trong từng trang HTML
foreach ($page in $pages) {
  if (-not (Test-Path $page)) { continue }
  $text = [System.IO.File]::ReadAllText($page, $utf8NoBom)
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

  $pageName = Split-Path $page -Leaf
  if ($text -ne $orig) {
    [System.IO.File]::WriteAllText($page, $text, $utf8NoBom)
    Write-Host ("{0}: đã cập nhật ({1} link)" -f $pageName, $count)
  } else {
    Write-Host ("{0}: không có gì thay đổi ({1} link)" -f $pageName, $count)
  }
}

Write-Host ''
Write-Host 'Mã hiện tại:'
$map.GetEnumerator() | Sort-Object Name | ForEach-Object { Write-Host ("  {0}  {1}" -f $_.Value, $_.Name) }
