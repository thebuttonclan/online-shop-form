# see https://www.terraform.io/docs/providers/azurerm/guides/service_principal_client_secret.html

provider "azurerm" {
  subscription_id = var.subscription_id
  tenant_id       = var.tenant_id
  client_id       = var.client_id
  client_secret   = var.client_secret

  features {}
}
