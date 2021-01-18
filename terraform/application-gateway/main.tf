# see https://docs.microsoft.com/en-us/azure/dns/dns-delegate-domain-azure-dns
# see https://docs.microsoft.com/en-us/azure/aks/ingress-tls
# see https://docs.openfaas.com/reference/ssl/kubernetes-with-cert-manager/
# see https://docs.microsoft.com/en-us/azure/application-gateway/features
# see https://docs.microsoft.com/en-us/azure/application-gateway/how-application-gateway-works
# see https://docs.microsoft.com/en-us/azure/developer/terraform/create-k8s-cluster-with-aks-applicationgateway-ingress
# see https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/application_gateway

locals {
  prefix            = "launchonline"
  resource_location = "Canada Central"
}

locals {
  vnet_name           = "${local.prefix}-vnet"
  resource_group_name = "${local.prefix}-resource-group"
}

resource "azurerm_subnet" "frontend" {
  name                 = "frontend"
  resource_group_name  = local.resource_group_name
  virtual_network_name = local.vnet_name
  address_prefixes     = ["10.1.2.0/24"]
}

resource "azurerm_subnet" "backend" {
  name                 = "backend"
  resource_group_name  = local.resource_group_name
  virtual_network_name = local.vnet_name
  address_prefixes     = ["10.1.3.0/24"]
}

data "azurerm_public_ip" "this" {
  name                = "frontend-pip"
  resource_group_name = local.resource_group_name
}

locals {
  backend_address_pool_name      = "${local.vnet_name}-beap"
  frontend_port_name             = "${local.vnet_name}-feport"
  frontend_ip_configuration_name = "${local.vnet_name}-feip"
  http_setting_name              = "${local.vnet_name}-be-htst"
  listener_name                  = "${local.vnet_name}-httplstn"
  request_routing_rule_name      = "${local.vnet_name}-rqrt"
  redirect_configuration_name    = "${local.vnet_name}-rdrcfg"
}

resource "azurerm_application_gateway" "this" {
  name                = "${local.prefix}-appgateway"
  resource_group_name = local.resource_group_name
  location            = local.resource_location

  sku {
    name     = "Standard_v2"
    tier     = "Standard_v2"
    capacity = 2
  }

  gateway_ip_configuration {
    name      = "${local.prefix}-appgateway-ip-configuration"
    subnet_id = azurerm_subnet.frontend.id
  }

  frontend_port {
    name = local.frontend_port_name
    port = 80
  }

  frontend_ip_configuration {
    name                 = local.frontend_ip_configuration_name
    public_ip_address_id = data.azurerm_public_ip.this.id
  }

  backend_address_pool {
    name = local.backend_address_pool_name
  }

  backend_http_settings {
    name                  = local.http_setting_name
    cookie_based_affinity = "Disabled"
    port                  = 80
    protocol              = "Http"
    request_timeout       = 60
  }

  http_listener {
    name                           = local.listener_name
    frontend_ip_configuration_name = local.frontend_ip_configuration_name
    frontend_port_name             = local.frontend_port_name
    protocol                       = "Http"
  }

  request_routing_rule {
    name                       = local.request_routing_rule_name
    rule_type                  = "Basic"
    http_listener_name         = local.listener_name
    backend_address_pool_name  = local.backend_address_pool_name
    backend_http_settings_name = local.http_setting_name
  }

  depends_on = []
}
