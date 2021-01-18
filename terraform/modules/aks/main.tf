# see https://registry.terraform.io/modules/Azure/aks/azurerm/latest

module "aks" {
  source                           = "Azure/aks/azurerm"
  resource_group_name              = var.resource_group_name
  client_id                        = var.client_id
  client_secret                    = var.client_secret
  prefix                           = var.prefix
  network_plugin                   = "azure"
  vnet_subnet_id                   = var.vnet_subnet_id
  sku_tier                         = "Paid"
  private_cluster_enabled          = false
  enable_log_analytics_workspace   = true
  enable_kube_dashboard            = true
  enable_role_based_access_control = false
  # see https://docs.microsoft.com/en-us/azure/aks/http-application-routing
  # HTTP application routing is only recommended for dev/test clusters
  enable_http_application_routing = false
  # see https://docs.microsoft.com/en-us/azure/aks/use-pod-security-on-azure-policy
  enable_azure_policy             = true
  enable_auto_scaling             = true
  agents_size                     = var.agents_size
  agents_min_count                = var.agents_min_count
  agents_max_count                = var.agents_max_count
  agents_count                    = null # set `null` while `enable_auto_scaling` is `true` to avoid possible `agents_count` changes.
  agents_pool_name                = "exnodepool"
  agents_availability_zones       = ["1", "2"]
  agents_type                     = "VirtualMachineScaleSets"

  agents_labels = {
    "nodepool" : "defaultnodepool"
  }

  agents_tags = {
    "Agent" : "defaultnodepoolagent"
  }

  network_policy                 = "azure"
  net_profile_dns_service_ip     = "10.0.0.10"
  net_profile_docker_bridge_cidr = "170.10.0.1/16"
  net_profile_service_cidr       = "10.0.0.0/16"

  depends_on = []
}
