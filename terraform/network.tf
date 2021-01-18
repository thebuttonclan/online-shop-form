resource "azurerm_virtual_network" "this" {
  name                = "${local.prefix}-vnet"
  resource_group_name = azurerm_resource_group.this.name
  location            = local.resource_location
  address_space       = ["10.1.0.0/16"]

  depends_on = [azurerm_resource_group.this]
}

resource "azurerm_subnet" "this" {
  name                 = "aks_subnet"
  resource_group_name  = azurerm_resource_group.this.name
  virtual_network_name = azurerm_virtual_network.this.name
  address_prefixes     = ["10.1.1.0/24"]
  service_endpoints    = ["Microsoft.Sql"]
}

resource "azurerm_public_ip" "this" {
  name                = "frontend-pip"
  resource_group_name = azurerm_resource_group.this.name
  location            = local.resource_location
  allocation_method   = "Static"
  sku                 = "Standard"
}
