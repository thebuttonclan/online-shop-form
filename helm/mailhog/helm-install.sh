#!/bin/bash

helm repo add codecentric https://codecentric.github.io/helm-charts

helm repo update

kubectl create namespace dev-mailhog
kubectl create namespace test-mailhog

helm install mailhog codecentric/mailhog -n dev-mailhog -f values-dev.yaml
helm install mailhog codecentric/mailhog -n test-mailhog -f values-test.yaml
