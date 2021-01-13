module "dns" {
  source              = "./modules/dns_records"
  dns_zone_name       = ""
  resource_group_name = azurerm_resource_group.this.name
  public_ip_id        = azurerm_public_ip.this.id
  names               = []

  depends_on = [azurerm_resource_group.this, azurerm_public_ip.this]
}
