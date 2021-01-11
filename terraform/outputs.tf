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

output "server_fqdn" {
  description = "The fully qualified domain name (FQDN) of the PostgreSQL server"
  value       = module.postgresql_dev.server_fqdn
}
