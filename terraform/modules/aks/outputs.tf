output "client_key" {
  value = module.aks.client_key
}

output "client_certificate" {
  value = module.aks.client_certificate
}

output "cluster_ca_certificate" {
  value = module.aks.cluster_ca_certificate
}

output "host" {
  value = module.aks.host
}

output "username" {
  value = module.aks.username
}

output "password" {
  value = module.aks.password
}

output "node_resource_group" {
  value = module.aks.node_resource_group
}

output "location" {
  value = module.aks.location
}

output "aks_id" {
  value = module.aks.aks_id
}

output "kube_config_raw" {
  value = module.aks.kube_config_raw
}

output "http_application_routing_zone_name" {
  value = module.aks.http_application_routing_zone_name
}

output "system_assigned_identity" {
  value = module.aks.system_assigned_identity
}

output "kubelet_identity" {
  value = module.aks.kubelet_identity
}
