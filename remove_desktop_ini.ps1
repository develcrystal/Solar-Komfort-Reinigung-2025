Get-ChildItem -Path "." -Name "desktop.ini" -Recurse | ForEach-Object {
    $fullName = Join-Path (Get-Location) $_
    Write-Host "Removing: $fullName"
    Remove-Item $fullName -Force
}
Write-Host "All desktop.ini files have been removed."