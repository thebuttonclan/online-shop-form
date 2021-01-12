#!/bin/bash

# see https://azure.github.io/application-gateway-kubernetes-ingress/

helm repo add application-gateway-kubernetes-ingress https://appgwingress.blob.core.windows.net/ingress-azure-helm-package/

helm repo update

helm install ingress-azure application-gateway-kubernetes-ingress/ingress-azure --version v1.3.0 -f helm-config.secret.yaml
