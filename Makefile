SHELL := /usr/bin/env bash

.PHONY: commit
commit:
	@@app/node_modules/.bin/git-cz

.PHONY: changelog
changelog:
	@@app/node_modules/.bin/standard-version
