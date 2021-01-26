#!/bin/bash

helm uninstall ingress-azure

helm repo remove application-gateway-kubernetes-ingress
