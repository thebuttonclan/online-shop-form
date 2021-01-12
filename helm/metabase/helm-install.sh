#!/bin/bash

# see https://azure.github.io/application-gateway-kubernetes-ingress/

helm repo add cas-metabase https://bcgov.github.io/cas-metabase

helm repo update

kubectl create namespace dev-metabase
kubectl create namespace test-metabase
kubectl create namespace prod-metabase

helm install metabase cas-metabase -n dev-metabase -f values-dev.yaml
helm install metabase cas-metabase -n test-metabase -f values-test.yaml
helm install metabase cas-metabase -n prod-metabase -f values-prod.yaml
