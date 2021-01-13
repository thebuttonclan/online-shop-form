resource "azurerm_dns_a_record" "this" {
  for_each = { for v in var.names : v => v }

  name                = each.value
  zone_name           = var.dns_zone_name
  resource_group_name = var.resource_group_name
  ttl                 = 300
  target_resource_id  = var.public_ip_id
}
