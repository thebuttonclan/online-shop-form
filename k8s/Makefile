SHELL := /usr/bin/env bash
NAMESPACE = dev

.PHONY: setup-db
setup-db:
	kubectl delete job/db-setup -n "${NAMESPACE}" || true
	kubectl apply -f db-setup-job.yaml -n "${NAMESPACE}" || true
	sleep 10
	kubectl logs job/db-setup -n "${NAMESPACE}" || true
	kubectl delete job/db-setup -n "${NAMESPACE}" || true
