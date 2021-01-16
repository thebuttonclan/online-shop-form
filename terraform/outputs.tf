output "aks_cluster_location" {
  value = module.aks.location
}

output "aks_node_resource_group" {
  value = module.aks.node_resource_group
}

output "aks_http_application_routing_zone_name" {
  value = module.aks.http_application_routing_zone_name
}

output "container_registry_url" {
  value = module.container_registry.container_registry_url
}

output "postgresql_dev_server_fqdn" {
  description = "The fully qualified domain name (FQDN) of the PostgreSQL server - Dev"
  value       = module.postgresql_dev.server_fqdn
}

# output "postgresql_test_server_fqdn" {
#   description = "The fully qualified domain name (FQDN) of the PostgreSQL server - Test"
#   value       = module.postgresql_test.server_fqdn
# }

# output "postgresql_prod_server_fqdn" {
#   description = "The fully qualified domain name (FQDN) of the PostgreSQL server - Prod"
#   value       = module.postgresql_prod.server_fqdn
# }

output "public_ip_id" {
  description = "The application gateway frontend Public IP address"
  value       = azurerm_public_ip.this.ip_address
}
