#!/bin/bash

# see https://azure.github.io/application-gateway-kubernetes-ingress/

helm repo add application-gateway-kubernetes-ingress https://appgwingress.blob.core.windows.net/ingress-azure-helm-package/

helm repo update

helm install ingress-azure application-gateway-kubernetes-ingress/ingress-azure -f helm-config.yaml

################################################################################
# OR
################################################################################

# helm install ingress-azure application-gateway-kubernetes-ingress/ingress-azure \
#     --namespace default \
#     --debug \
#     --set appgw.name=applicationgatewayABCD \
#     --set appgw.resourceGroup=your-resource-group \
#     --set appgw.subscriptionId=subscription-uuid \
#     --set appgw.usePrivateIP=false \
#     --set appgw.shared=false \
#     --set armAuth.type=servicePrincipal \
#     --set armAuth.secretJSON=$(az ad sp create-for-rbac --sdk-auth | base64 -w0) \
#     --set rbac.enabled=false \
#     --set verbosityLevel=3 \
#     --set kubernetes.watchNamespace=default \
#     --version 1.3.0
