variable "client_secret" {
  description = "The Client Secret (password) for the Service Principal used for the AKS deployment"
}

variable "tenant_id" {
  description = "The Tenant ID for the Service Principal used for the AKS deployment"
}

variable "subscription_id" {
  description = "The Subscription ID for the Service Principal used for the AKS deployment"
}

variable "client_id" {
  description = "The Client ID (appId) for the Service Principal used for the AKS deployment"
}

variable "postgresql_password_dev" {
  description = "The Password associated with the administrator_login for the PostgreSQL Server in Dev"
  default     = null
}

variable "postgresql_password_test" {
  description = "The Password associated with the administrator_login for the PostgreSQL Server in Test"
  default     = null
}

variable "postgresql_password_prod" {
  description = "The Password associated with the administrator_login for the PostgreSQL Server in Prod"
  default     = null
}
