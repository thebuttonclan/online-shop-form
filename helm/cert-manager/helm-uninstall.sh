#!/bin/bash

# kubectl delete -f cluster_issuer-staging.yaml -n cert-manager

kubectl delete -f cluster_issuer.yaml -n cert-manager

kubectl delete -f https://github.com/jetstack/cert-manager/releases/download/v1.1.0/cert-manager.yaml

helm uninstall cert-manager -n cert-manager

kubectl delete namespace cert-manager

helm repo remove jetstack
