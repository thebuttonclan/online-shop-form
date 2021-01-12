SHELL := /usr/bin/env bash
NAMESPACE = default
ENV = dev

.PHONY: install-app
install-app:
	helm install webapp web-app -n "${NAMESPACE}" -f ./web-app/values.yaml -f "./web-app/values-${ENV}.secret.yaml"

.PHONY: upgrade-app
upgrade-app:
	helm upgrade --install webapp web-app -n "${NAMESPACE}" -f ./web-app/values.yaml -f "./web-app/values-${ENV}.secret.yaml"

.PHONY: lint-app
lint-app:
	helm upgrade --dry-run --install webapp web-app -n "${NAMESPACE}" -f ./web-app/values.yaml -f "./web-app/values-${ENV}.secret.yaml"

.PHONY: uninstall-app
uninstall-app:
	helm uninstall webapp -n ${NAMESPACE}

.PHONY: force-install-app
force-install-app: uninstall-app
force-install-app: install-app
