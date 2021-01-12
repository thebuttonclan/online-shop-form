SHELL := /usr/bin/env bash
NAMESPACE = osf
IMAGE_NAME = webapp
TAG = blast
IMAGE_REPO = ${IMAGE_NAME}:${TAG}
ACR = onlineshopsgrantacr.azurecr.io

.PHONY: docker-build
docker-build:
	docker build -t ${IMAGE_REPO} -f Dockerfile ../../app

.PHONY: az-push
az-push:
	az acr login --name ${ACR}
	docker tag ${IMAGE_REPO} ${ACR}/${NAMESPACE}/${IMAGE_REPO}
	docker push ${ACR}/${NAMESPACE}/${IMAGE_REPO}

.PHONY: az-push-all
az-push-all: docker-build
az-push-all: az-push
