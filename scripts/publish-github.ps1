# Publie COPRO sur GitHub (après : gh auth login)
$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) {
    Write-Error "GitHub CLI introuvable. Installez-le : winget install GitHub.cli"
}

gh auth status 2>&1 | Out-Null
if ($LASTEXITCODE -ne 0) {
    Write-Host "Connexion GitHub requise. Lancement de la connexion..."
    gh auth login --hostname github.com --git-protocol https --web
}

$repoName = if ($env:COPRO_GITHUB_REPO) { $env:COPRO_GITHUB_REPO } else { "copro" }

Write-Host "Creation du depot GitHub '$repoName' et envoi du code..."
gh repo create $repoName --public --source=. --remote=origin --push --description "COPRO - messagerie copropriete (Expo React Native)"

if ($LASTEXITCODE -eq 0) {
    gh repo view --web
    Write-Host "Termine."
}
