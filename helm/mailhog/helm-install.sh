#!/bin/bash

helm repo add codecentric https://codecentric.github.io/helm-charts

helm repo update

kubectl create namespace dev-mailhog
kubectl create namespace test-mailhog

helm install mailhog codecentric/mailhog -n dev-mailhog -f values.yaml -f values-dev.secret.yaml
helm install mailhog codecentric/mailhog -n test-mailhog -f values.yaml -f values-test.secret.yaml

kubectl get svc -n dev-mailhog
kubectl get svc -n test-mailhog
