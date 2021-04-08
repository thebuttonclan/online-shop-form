# Developer Guidelines

## Setting up the local development environment

- [`asdf`](https://asdf-vm.com/#/core-manage-asdf) is a tool to manage the required packages with specific versions.
- All the packages are defined in `tool-versions`:
  - nodejs 12.18.3
  - yarn 1.22.4
  - python 3.8.6
  - postgres 11.4
  - terraform 0.14.4

### Installation

1. Install `asdf` according to the `asdf` installation guide.
   - https://asdf-vm.com/#/core-manage-asdf?id=install
1. Install `asdf` packages defined in `.tool-versions`.
   ```sh
      cat .tool-versions | cut -f 1 -d ' ' | xargs -n 1 asdf plugin-add || true
      asdf plugin-update --all
      bash ~/.asdf/plugins/nodejs/bin/import-release-team-keyring
      asdf install
      asdf reshim
   ```
1. Install NodeJS packages via `Yarn`
   ```sh
    cd app
    yarn
   ```

### Setup

1. Start the local `postgres` server (`pg_ctl start` if you installed it with `asdf`)
1. Generate initial database schemas, fields, functions and related objects.
   ```sh
    cd db
    ./setup
   ```
1. Start the application server.
   ```sh
    cd app
    yarn dev
   ```

## Code style and Linting

We use [Eslint](https://eslint.org/) to lint the app's code and [Prettier](https://prettier.io/) to format it. The following yarn scripts can be used to trigger linting and formatting:

- `yarn lint`: Runs Eslint and prints all the errors and warnings
- `yarn format`: Reformats the code using Prettier

## Testing

the application have testing infrastructure set up. These tests are included in the CI pipeline to run when code is added to the repository and will need to pass before users can contribute to the project.

## User Authentication

The application does not require any user authentications.

## Committing

This project includes a [commitizen](https://github.com/commitizen/cz-cli) configuration
to facilitate conformance with the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) specification.

Run `make commit` to use the `git commit` wrapper that ensures your commit messages are well-formed.

## git-crypt

We use [`git-crypt`](https://github.com/AGWA/git-crypt) to encrypt files containing sensitive data.
Once you have the `hash string` of `git-crypt.key` file, configure your repository:

```sh
git-crypt init
echo "<hash>" | base64 -d > git-crypt.key
git-crypt unlock git-crypt.key
```
