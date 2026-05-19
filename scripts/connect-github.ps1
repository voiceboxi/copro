# Connexion GitHub quand "gh auth login" echoue (OAuth / pare-feu)
# Usage :
#   $env:GH_TOKEN = "ghp_votre_token"
#   .\scripts\connect-github.ps1
# Ou : le script vous demandera le token (masque a la saisie)

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

$gh = Get-Command gh -ErrorAction SilentlyContinue
if (-not $gh) {
    Write-Error "Installez GitHub CLI : winget install GitHub.cli"
}

$token = $env:GH_TOKEN
if (-not $token) {
    Write-Host @"

1. Ouvrez : https://github.com/settings/tokens/new
   Cochez au minimum : repo
2. Generez le token et copiez-le (ghp_...)

"@
    $secure = Read-Host "Collez votre token GitHub" -AsSecureString
    $ptr = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($secure)
    try {
        $token = [Runtime.InteropServices.Marshal]::PtrToStringBSTR($ptr)
    } finally {
        [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($ptr)
    }
}

$token.Trim() | gh auth login --with-token
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

gh auth setup-git
gh auth status

Write-Host "`nConnexion OK. Publication du depot..."
& "$PSScriptRoot\publish-github.ps1"
