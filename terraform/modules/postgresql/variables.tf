variable "resource_group_name" {
  description = "The name of the resource group in which to create the resources"
}

variable "location" {
  description = "The location to host the gke cluster in"
  default     = "Canada Central"
}

variable "prefix" {
  description = "The prefix for the resources created in the specified Azure Resource Group"
}

# see https://docs.microsoft.com/en-us/azure/azure-sql/database/resource-limits-vcore-single-databases
variable "sku_name" {
  description = "The SKU Name for this PostgreSQL Server. The name of the SKU, follows the tier + family + cores pattern (e.g. B_Gen4_1, GP_Gen5_8)"
  default     = "GP_Gen5_4"
}

variable "storage_mb" {
  description = "Max storage allowed for a server. Possible values are between 5120 MB(5GB) and 1048576 MB(1TB) for the Basic SKU and between 5120 MB(5GB) and 4194304 MB(4TB) for General Purpose/Memory Optimized SKUs"
  type        = number
  default     = 5120
}

variable "vnet_subnet_id" {
  description = "The ID of a Subnet where the Kubernetes Node Pool should exist"
  default     = null
}

variable "admin_username" {
  description = "The Administrator Login for the PostgreSQL Server"
  type        = string
}

variable "admin_password" {
  description = "The Password associated with the administrator_login for the PostgreSQL Server"
  type        = string
}

variable "create_read_replica" {
  default = false
}
