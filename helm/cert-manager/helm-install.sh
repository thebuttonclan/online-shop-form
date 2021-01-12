#!/bin/bash

# see https://artifacthub.io/packages/helm/jetstack/cert-manager
# see https://github.com/jetstack/cert-manager/tree/master/deploy/charts/cert-manager

kubectl apply -f https://github.com/jetstack/cert-manager/releases/download/v1.2.0-alpha.0/cert-manager.crds.yaml

kubectl create namespace cert-manager

helm repo add jetstack https://charts.jetstack.io

helm repo update

helm install --name cert-manager --namespace cert-manager jetstack/cert-manager

kubectl apply -f cluster_issuer.yaml
