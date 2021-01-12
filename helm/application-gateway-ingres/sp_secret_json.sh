#!/bin/bash

# see https://github.com/Azure/application-gateway-kubernetes-ingress/issues/978

cred=$(jq -n \
  --arg clientId "$CLIENT_ID" \
  --arg clientSecret "$CLIENT_SECRET" \
  --arg subscriptionId "$SUBSCRIPTION_ID" \
  --arg tenantId "$TENANT_ID" \
  '{
  clientId: $clientId,
  clientSecret: $clientSecret,
  subscriptionId: $subscriptionId,
  tenantId: $tenantId,
  activeDirectoryEndpointUrl: "https://login.microsoftonline.com",
  resourceManagerEndpointUrl: "https://management.azure.com/",
  activeDirectoryGraphResourceId: "https://graph.windows.net/",
  sqlManagementEndpointUrl: "https://management.core.windows.net:8443/",
  galleryEndpointUrl: "https://gallery.azure.com/",
  managementEndpointUrl: "https://management.core.windows.net/"}
  ')

echo "$cred" | base64 -w0
