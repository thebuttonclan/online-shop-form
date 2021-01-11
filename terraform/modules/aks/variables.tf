variable "resource_group_name" {
  description = "The name of the resource group in which to create the resources"
}

variable "client_id" {
  description = "The Client ID (appId) for the Service Principal used for the AKS deployment"
}

variable "client_secret" {
  description = "The Client Secret (password) for the Service Principal used for the AKS deployment"
}

variable "prefix" {
  description = "The prefix for the resources created in the specified Azure Resource Group"
}

variable "location" {
  description = "The location to host the gke cluster in"
  default     = "Canada Central"
}

variable "vnet_subnet_id" {
  description = "The ID of a Subnet where the Kubernetes Node Pool should exist"
  default     = null
}

# see https://docs.microsoft.com/en-us/azure/virtual-machines/sizes-previous-gen
variable "agents_size" {
  description = "The default virtual machine size for the Kubernetes agents"
  default     = "Standard_F2"
}

variable "agents_min_count" {
  description = "Minimum number of nodes in a pool"
  type        = number
  default     = 1
}

variable "agents_max_count" {
  description = "Maximum number of nodes in a pool"
  type        = number
  default     = 2
}
