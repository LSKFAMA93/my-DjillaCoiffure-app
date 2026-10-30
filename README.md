# 223 Djilla Coiffure

Site vitrine responsive du salon 223 Djilla Coiffure à Kalaban-Coro. Le site rassemble les prestations coiffure et henné, la galerie filtrable, les informations du salon et un formulaire de rendez-vous qui prépare une demande WhatsApp.

## Développement

```sh
npm install
npm run dev
```

## Vérification et production

```sh
npm run lint
npm run build
npm run preview
```

Les photos du salon sont servies depuis `public/images/`. Les demandes de rendez-vous sont transmises à WhatsApp ; elles ne sont pas enregistrées dans une base de données.

## Générer l'APK sur GitHub

Le workflow GitHub Actions [`../.github/workflows/build-android-apk.yml`](../.github/workflows/build-android-apk.yml) compile automatiquement un APK de test après chaque push. Il peut aussi être lancé manuellement depuis l'onglet **Actions** du dépôt avec **Build Android APK** → **Run workflow**.

Une fois l'exécution terminée, ouvrez-la dans **Actions**, puis téléchargez l'artefact `223-djilla-coiffure-android-apk`. L'archive contient `app-debug.apk`, installable sur un appareil Android pour tester l'application.

La génération se fait sur les serveurs GitHub avec Capacitor, Java et Android SDK : Android Studio n'est pas nécessaire sur votre ordinateur. Cet APK de débogage sert aux tests ; une publication sur Google Play nécessite un APK/AAB de production signé.
