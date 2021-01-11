variable "name" {
  description = "The name of the container registry"
}

variable "resource_group_name" {
  description = "The name of the resource group in which to create the resources"
}

variable "location" {
  description = "The location to host the gke cluster in"
  default     = "Canada Central"
}
