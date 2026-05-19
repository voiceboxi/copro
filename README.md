# COPRO

Application mobile de messagerie pour **copropriété**, inspirée de WhatsApp. Fonctionne sur **Android** et **iOS** via [Expo](https://expo.dev).

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

1. Connectez-vous (une seule fois) :

```bash
gh auth login
```

2. Publiez le dépôt :

```powershell
.\scripts\publish-github.ps1
```

Ou manuellement :

```bash
gh repo create copro --public --source=. --remote=origin --push
```

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
