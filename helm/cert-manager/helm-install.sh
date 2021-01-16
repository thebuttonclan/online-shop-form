#!/bin/bash

# see https://azure.github.io/application-gateway-kubernetes-ingress/how-tos/lets-encrypt/
# see https://artifacthub.io/packages/helm/jetstack/cert-manager
# see https://github.com/jetstack/cert-manager/tree/master/deploy/charts/cert-manager
# see https://cert-manager.io/docs/installation/kubernetes/

kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.1.0/cert-manager.yaml

kubectl create namespace cert-manager

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install cert-manager jetstack/cert-manager -n cert-manager --version v1.1.0

# kubectl apply -f cluster_issuer-staging.yaml

kubectl apply -f cluster_issuer.yaml
