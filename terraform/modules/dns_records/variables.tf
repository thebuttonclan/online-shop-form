variable "dns_zone_name" {
  description = "The name of the DNS zone name"
}

variable "resource_group_name" {
  description = "The name of the resource group in which to create the resources"
}

variable "public_ip_id" {
  description = "The application gateway frontend Public IP ID"
}

variable "names" {
  description = "The list of DNS A record names"
  type        = list(string)
}
