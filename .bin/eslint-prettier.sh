#!/bin/bash

set -eo pipefail

git ls-files '*.js' '*.ts' | xargs app/node_modules/.bin/prettier --write
git ls-files '*.js' '*.ts' | xargs app/node_modules/.bin/eslint
