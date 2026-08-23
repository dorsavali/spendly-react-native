# CI/CD setup

## CI

`.github/workflows/ci.yml` runs on every push and pull request to `main`. It installs the locked dependencies, checks TypeScript and Expo, and verifies that Metro can create the Android bundle.

## Android APK delivery

`.github/workflows/android-apk.yml` generates the native Android project and builds a release APK directly on the GitHub-hosted runner when either:

- the workflow is run manually from **GitHub > Actions > Android APK > Run workflow**; or
- a version tag such as `v1.0.1` is pushed.

The resulting `spendly-android-apk` file is available in the **Artifacts** section of the completed GitHub Actions run for 14 days.

No Expo token or repository secret is required for this workflow. Build logs and the downloadable APK are kept in GitHub Actions.
