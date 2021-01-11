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
