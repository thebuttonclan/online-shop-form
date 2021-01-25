## Application Release Process

When merging to the `dev` branch, the application is continuously deployed to our development environment at https://dev.launchonline.ca/. This document describes the steps required to deploying the application to our test (QA) and production environments.

## Change logs and Tags

1. Create/checkout `chore/release` branch
1. Generate/update `CHANGELOG.md` with a bumped version following [semantic versioning](https://semver.org/), commit the changes and tag that commit.
   ```sh
   make changelog
   ```
1. Push the new tag
   ```sh
   git push --follow-tags
   ```
1. Create a pull request from `chore/release` to `dev`.

- Note that CI pipeline generates application container images on the tag push events, followed by the deployment to the testing environment at https://test.launchonline.ca/.

## Production Release

- We use [`Github workflow dispatch`](https://docs.github.com/en/actions/reference/events-that-trigger-workflows#manual-events) to release a production app at https://launchonline.ca/. The `workflow dispatch` takes a `tag` value for the container image.
