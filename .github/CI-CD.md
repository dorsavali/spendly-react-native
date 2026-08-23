# CI/CD setup

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main`. It installs the locked dependencies, checks TypeScript and Expo, and verifies that Metro can create the Android bundle.

## Android APK delivery

`.github/workflows/android-apk.yml` starts an EAS `preview` build when either:

- the workflow is run manually from **GitHub > Actions > Android APK > Run workflow**; or
- a version tag such as `v1.0.1` is pushed.

The `preview` profile in `eas.json` explicitly uses `android.buildType: apk`, so the EAS result is directly installable on Android devices.

## Required GitHub secret

1. Create an Expo access token from <https://expo.dev/accounts/dorsavalli/settings/access-tokens>.
2. Open the GitHub repository and go to **Settings > Secrets and variables > Actions**.
3. Add a repository secret named `EXPO_TOKEN` and paste the Expo token as its value.

Do not commit the token to the repository. The APK and build logs are available from the Expo build link printed in the GitHub Actions job.
