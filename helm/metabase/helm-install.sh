#!/bin/bash

# see https://azure.github.io/application-gateway-kubernetes-ingress/

helm repo add cas-metabase https://bcgov.github.io/cas-metabase

helm repo update

kubectl create namespace dev-metabase
kubectl create namespace test-metabase
kubectl create namespace prod-metabase

# note that the name must be `cas-metabase` to work with the helm configuration
helm install cas-metabase cas-metabase/cas-metabase -n dev-metabase -f values-dev.yaml
helm install cas-metabase cas-metabase/cas-metabase -n test-metabase -f values-test.yaml
helm install cas-metabase cas-metabase/cas-metabase -n prod-metabase -f values-prod.yaml

#
# use the following helm commands to uninstalling metabase instances
#
# helm uninstall cas-metabase -n dev-metabase
# kubectl delete pvc --all -n dev-metabase
# kubectl delete configmap --all -n dev-metabase
#
