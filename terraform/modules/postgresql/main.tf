# see https://docs.microsoft.com/en-us/azure/postgresql/concepts-high-availability
# see https://docs.microsoft.com/en-us/azure/postgresql/concepts-backup
# see https://docs.microsoft.com/en-us/azure/postgresql/concepts-supported-versions
# see https://docs.microsoft.com/en-us/azure/postgresql/concepts-planned-maintenance-notification
# see https://registry.terraform.io/modules/Azure/postgresql/azurerm/latest
# see https://registry.terraform.io/providers/hashicorp/azurerm/latest/docs/resources/postgresql_server#create_mode

locals {
  sku_name       = "GP_Gen5_2"
  storage_mb     = 5120
  server_version = "11"
}

module "postgresql" {
  source = "Azure/postgresql/azurerm"

  resource_group_name = var.resource_group_name
  location            = var.location

  server_name                  = "${var.prefix}-db"
  sku_name                     = local.sku_name
  storage_mb                   = local.storage_mb
  backup_retention_days        = 14
  geo_redundant_backup_enabled = false
  administrator_login          = var.admin_username
  administrator_password       = var.admin_password
  server_version               = local.server_version
  ssl_enforcement_enabled      = false
  db_names                     = ["osf"]
  db_charset                   = "UTF8"
  db_collation                 = "English_United States.1252"

  firewall_rule_prefix = "firewall-"
  firewall_rules       = []

  vnet_rule_name_prefix = "postgresql-vnet-rule-"
  vnet_rules = [
    { name = "subnet1", subnet_id = var.vnet_subnet_id },
  ]

  postgresql_configurations = {
    backslash_quote = "on",
  }

  depends_on = []
}

resource "azurerm_postgresql_server" "reader" {
  count               = var.create_read_replica ? 1 : 0
  name                = "${module.postgresql.server_name}-reader"
  resource_group_name = var.resource_group_name
  location            = var.location

  sku_name   = local.sku_name
  storage_mb = local.storage_mb
  version    = local.server_version

  create_mode               = "Replica"
  creation_source_server_id = module.postgresql.server_id

  ssl_enforcement_enabled = false

  depends_on = [module.postgresql]
}
