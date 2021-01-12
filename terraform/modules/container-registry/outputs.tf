output "container_registry_id" {
  value = azurerm_container_registry.this.id
}

output "container_registry_url" {
  value = azurerm_container_registry.this.login_server
}
