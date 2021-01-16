# see https://docs.microsoft.com/en-us/azure/developer/terraform/store-state-in-azure-storage
terraform {
  required_version = ">= 0.12.0"
  backend "azurerm" {
    resource_group_name  = "launchonline-storage-resource-group"
    storage_account_name = "launchonlinestorage"
    container_name       = "lo-tstate"
    key                  = "terraform.tfstate"
  }
}
