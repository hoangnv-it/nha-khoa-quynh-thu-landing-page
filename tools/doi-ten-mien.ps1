<#
  doi-ten-mien.ps1
  Đổi địa chỉ website (canonical, og:url, og:image, JSON-LD, sitemap, robots, llms.txt) ở MỘT lần chạy.
  Địa chỉ hiện tại lưu trong tools/site-url.txt (đây là "một chỗ" duy nhất cần nhớ).

  Cách chạy (từ thư mục dự án):
    powershell -ExecutionPolicy Bypass -File tools\doi-ten-mien.ps1 -NewUrl "https://nhakhoaquynhthu.vn/"
#>
param(
  [Parameter(Mandatory = $true)][string]$NewUrl
)

$ErrorActionPreference = 'Stop'

$root    = Split-Path -Parent $PSScriptRoot
$public  = Join-Path $root 'public'
$urlFile = Join-Path $PSScriptRoot 'site-url.txt'
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)

if (-not $NewUrl.EndsWith('/')) { $NewUrl += '/' }
$oldUrl = ([System.IO.File]::ReadAllText($urlFile, $utf8NoBom)).Trim()
if (-not $oldUrl.EndsWith('/')) { $oldUrl += '/' }

if ($oldUrl -eq $NewUrl) { Write-Host 'Địa chỉ không đổi.'; exit 0 }

$targets = @('index.html', '404.html', 'sitemap.xml', 'robots.txt', 'llms.txt') | ForEach-Object { Join-Path $public $_ }
$svcDir = Join-Path $public 'dich-vu'
if (Test-Path $svcDir) { $targets += Get-ChildItem $svcDir -Filter '*.html' -File | ForEach-Object { $_.FullName } }
$enDir = Join-Path $public 'en'
if (Test-Path $enDir) { $targets += Get-ChildItem $enDir -Recurse -Filter '*.html' -File | ForEach-Object { $_.FullName } }
foreach ($t in $targets) {
  if (-not (Test-Path $t)) { continue }
  $text = [System.IO.File]::ReadAllText($t, $utf8NoBom)
  $new  = $text.Replace($oldUrl, $NewUrl)
  if ($new -ne $text) {
    [System.IO.File]::WriteAllText($t, $new, $utf8NoBom)
    Write-Host ("Đã đổi: {0}" -f (Split-Path $t -Leaf))
  }
}

[System.IO.File]::WriteAllText($urlFile, $NewUrl + "`n", $utf8NoBom)
Write-Host ("Xong: {0} -> {1}" -f $oldUrl, $NewUrl)
Write-Host 'Nhớ ghi 1 dòng vào Nhật ký thay đổi trong PROJECT_BRIEF.md.'
