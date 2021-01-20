drop view if exists public.application_extract;
create view public.application_extract
    as select
        id,
        form_data ->> 'businessName' AS business_name,
        form_data ->> 'primaryContactName' AS primary_contact_name,
        form_data ->> 'primaryContactPosition' AS primary_contact_position,
        form_data ->> 'businessPhone' AS business_phone,
        form_data ->> 'email' AS email,
        form_data ->> 'businessAddress' AS business_address,
        form_data ->> 'bcOwned' AS bc_owned,
        form_data ->> 'locatedInBc' AS located_in_bc,
        form_data ->> 'isCurrentlyOperating' AS is_currently_operating,
        form_data ->> 'bcRegistrationID' AS bc_registration_id,
        form_data ->> 'federalBusinessNumber' AS federal_business_number,
        form_data ->> 'gstNumber' AS gst_number,
        form_data ->> 'incomeTaxesFiled' AS income_taxes_filed,
        form_data ->> 'revenue2019' AS revenue_2019,
        form_data ->> 'workSafeBcRegistered' AS registered_for_worksafe_bc,
        form_data ->> 'workSafeBcRegistrationNumber' AS worksafe_bc_registration_number,
        form_data ->> 'region' AS region,
        form_data ->> 'isIndigenous' AS is_indigenous,
        form_data ->> 'cannabisProducts' AS cannabis_products,
        form_data ->> 'madeInBc' AS made_in_bc,
        form_data ->> 'productionLocation' AS production_location,
        form_data ->> 'employees' AS number_of_employees,
        form_data ->> 'importExportBusiness' AS import_export_business,
        form_data -> 'onlineStore' ->> 'existingOnlineStore' AS existing_online_store,
        form_data -> 'onlineStore' ->> 'onlineStoreUrl' AS online_store_url,
        form_data -> 'onlineStore' ->> 'existingStoreFeatures' AS existing_store_features,
        form_data ->> 'canMeetDeadline' AS can_meet_deadline,
        form_data ->> 'otherCovidFunding' AS recieved_other_covid_funding,
        form_data ->> 'otherPrograms' AS other_covid_programs,
        form_data ->> 'sector' AS sector,
        form_data ->> 'sectorOther' AS sector_other,
        form_data ->> 'planForFunds' AS plan_for_funds,
        form_data -> 'costs' ->> 'serviceProviderCosts' AS service_provider_costs,
        form_data -> 'costs' ->> 'customerAcquisitionCosts' AS customer_acquisition_costs,
        form_data -> 'costs' ->> 'staffTrainingCosts' AS staff_training_costs,
        (
          (form_data -> 'costs' ->> 'serviceProviderCosts')::numeric +
          (form_data -> 'costs' ->> 'customerAcquisitionCosts')::numeric +
          (form_data -> 'costs' ->> 'staffTrainingCosts')::numeric
        ) AS total_costs,
        LEAST(
          7500,
          (.75 * (
            (form_data -> 'costs' ->> 'serviceProviderCosts')::numeric +
            (form_data -> 'costs' ->> 'customerAcquisitionCosts')::numeric +
            (form_data -> 'costs' ->> 'staffTrainingCosts')::numeric
          ))
        ) AS grant_request
    from applications;
