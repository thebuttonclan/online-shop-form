## Infrastructure

We use [Terraform](https://www.terraform.io/) as an `infrastructure as code` tool to provision required resources in the Azure cloud.
The documents follow [the article describing how to get started with Terraform on Azure.](https://docs.microsoft.com/en-us/azure/developer/terraform/get-started-cloud-shell)

## Steps

1. Authenticate via Microsoft account.

   ```sh
   az login
   ```

1. Create an Azure service principal.

   ```sh
   az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/<subscription_id>"
   ```

   - it outputs the following object that includes the all neccessary credentials:

   ```json
   {
     "appId": "<client_id>",
     "password": "<client_secret>",
     "tenant": "<tenant_id>"
   }
   ```

1. Log in using an Azure service principal

   ```sh
   az login --service-principal -u "<client_id>" -p "<client_secret>" --tenant "<tenant_id>"
   ```

1. Set up the Terraform variable files `terraform.tfvars` in `/terraform`, `/terraform/application-gateway` and `/terraform/application-insights`.

   ```
   subscription_id = "<subscription_id>"
   tenant_id = "<tenant_id>"
   client_id = "<client_id>"
   client_secret = "<client_secret>"
   postgresql_password_dev = "<postgresql_password_dev>"
   postgresql_password_test = "<postgresql_password_test>"
   postgresql_password_prod = "<postgresql_password_prod>"

   ```

1. Run `terraform init` and `terraform plan` in each directory to see execution plans.
1. Once the plans are verified, create resources by running `terraform apply --auto-apply`.

   - In order to share each Terraform state between all team members, the states are stored in Azure Storage. see `config.tf` files.

1. Configure `kubectl` to connect to your Kubernetes cluster and give the cluster to pull images from the ACR.

   ```sh
   az aks get-credentials --resource-group <recource_group_name> --name <aks_cluster_name>
   az aks update -n <aks_cluster_name> -g <recource_group_name> --attach-acr <acr_name>
   ```

1. After provisioning all resources in Azure cloud, install `application gateway ingress` via Helm.

   - Set required values in `helm/application-gateway-ingress/helm-config.secret.yaml` before installing Helm chart.

   ```
   appgw.subscriptionId <subscription_id>
   appgw.resourceGroup <resource_group_name>
   appgw.name <app_gateway_name>
   armAuth.secretJSON <encrypted credential hash from sp_secret_json.sh>
   ```

   ```sh
   cd helm/application-gateway-ingress
   ./helm-install.sh
   ```

1. Install `cert-manager` to support `Let's Encrypt TLS certificates`.

   ```sh
   cd helm/cert-manager
   ./helm-install.sh
   ```
