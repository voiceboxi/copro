# COPRO

Application mobile de messagerie pour **copropriété**, inspirée de WhatsApp. Fonctionne sur **Android** et **iOS** via [Expo](https://expo.dev).

## Aperçu en ligne (GitHub Pages)

**https://voiceboxi.github.io/copro/**

Publié automatiquement à chaque push sur `main`.

**Configuration unique (si la page est vide ou 404) :**

1. [Settings → Pages](https://github.com/voiceboxi/copro/settings/pages)
2. **Build and deployment** → **Source** : **Deploy from a branch**
3. **Branch** : `gh-pages` → dossier **`/ (root)`** → **Save**
4. Attendre 1–2 min après le workflow **Actions** (vert ✅)

## Fonctionnalités

- **Discussions** : liste des conversations (syndic, voisins, groupes, alertes)
- **Chat** : bulles de messages, envoi en temps réel (données locales de démo)
- **Actualités** : fil type « statuts » de la résidence
- **Communauté** : espaces annonces, entraide, événements
- **Réglages** : profil résident et préférences

## Démarrage

```bash
cd application
npm install
npm start
```

Puis :

- **Android** : appuyez sur `a` ou scannez le QR code avec **Expo Go**
- **iOS** : appuyez sur `i` ou scannez avec l’appareil photo (Expo Go)
- **Émulateur** : `npm run android` ou `npm run ios` (iOS nécessite macOS)

## Publier sur GitHub

### Méthode recommandée (token)

Si `gh auth login` échoue (pare-feu, erreur OAuth) :

1. Créez un token : [github.com/settings/tokens/new](https://github.com/settings/tokens/new) (scope **repo**)
2. Dans PowerShell :

```powershell
cd c:\Users\voice\Downloads\Cursor-open\application
$env:GH_TOKEN = "ghp_VOTRE_TOKEN"
.\scripts\connect-github.ps1
```

Le script connecte `gh` et crée le dépôt **copro** sur votre compte.

### Méthode classique

```powershell
gh auth login
.\scripts\publish-github.ps1
```

## Déploiement Vercel

Le site web est généré avec `npm run build:web` (dossier `dist`). Le fichier `vercel.json` configure le build automatique.

Paramètres Vercel du projet :
- **Root Directory** : `.` (racine du dépôt)
- **Build Command** : `npm run build:web`
- **Output Directory** : `dist`

## Build production

```bash
npx expo prebuild
npx eas build --platform android
npx eas build --platform ios
```

Compte [Expo](https://expo.dev) et configuration EAS recommandés pour publier sur les stores.

## Structure

- `app/` — écrans (Expo Router)
- `components/copro/` — UI réutilisable
- `constants/` — thème et données de démo
- `context/` — état des messages

Les données sont **mockées** pour la démo. Branchez un backend (Firebase, Supabase, API REST) pour une mise en production.
