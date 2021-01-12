locals {
  prefix            = "onlineshopsgrant"
  resource_location = "Canada Central"
}

resource "azurerm_resource_group" "this" {
  name     = "${local.prefix}-resource-group"
  location = local.resource_location
}

module "aks" {
  source              = "./modules/aks"
  resource_group_name = azurerm_resource_group.this.name
  location            = local.resource_location
  client_id           = var.client_id
  client_secret       = var.client_secret
  prefix              = local.prefix
  vnet_subnet_id      = azurerm_subnet.this.id
  agents_min_count    = 1
  agents_max_count    = 3

  depends_on = [azurerm_resource_group.this, azurerm_subnet.this]
}

module "postgresql_dev" {
  source              = "./modules/postgresql"
  prefix              = local.prefix
  resource_group_name = azurerm_resource_group.this.name
  location            = local.resource_location
  admin_username      = "rootadmin"
  admin_password      = var.postgresql_password_dev
  vnet_subnet_id      = azurerm_subnet.this.id
  create_read_replica = true

  depends_on = [azurerm_resource_group.this, azurerm_subnet.this]
}

module "container_registry" {
  source              = "./modules/container-registry"
  name                = "${local.prefix}acr"
  resource_group_name = azurerm_resource_group.this.name
  location            = local.resource_location

  depends_on = [azurerm_resource_group.this]
}