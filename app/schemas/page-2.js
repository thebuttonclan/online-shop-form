import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';

const TEXT_MIN_LENGTH = 1;
const TEXT_MAX_LENGTH = 1000;
const CURRENCY_REGEX = '^([1-9]{1})[0-9]*(.[0-9]{1,2})?$';

const schema2 = {
  title: 'Example Form',
  type: 'object',
  required: [
    'cannabisProducts',
    'madeInBc',
    'employees',
    'importExportBusiness',
    'existingOnlineStore',
    'canMeetDeadline',
    'otherCovidFunding',
    // GRANT PROPOSAL SECTION
    'planForFunds',
    'serviceProviders',
    'customerAcquisition',
    'staffTraining',
    'useOfGrant',
    'personalInformation',
    'taxImplications',
  ],
  dependencies: {
    madeInBc: {
      oneOf: [
        {
          properties: {
            madeInBc: { enum: [true] },
          },
        },
        {
          properties: {
            madeInBc: { enum: [false] },
            // not the best name here, but like sector maybe we consolidate to one field? discuss
            productionLocation: {
              type: 'string',
              title: 'If no, where',
              name: 'productionLocation',
              minLength: TEXT_MIN_LENGTH,
              maxLength: TEXT_MAX_LENGTH,
            },
          },
          required: ['productionLocation'],
        },
      ],
    },
    existingOnlineStore: {
      oneOf: [
        {
          properties: {
            existingOnlineStore: { enum: [false] },
          },
        },
        {
          properties: {
            existingOnlineStore: { enum: [true] },
            onlineStoreUrl: {
              type: 'string',
              title: 'Link to online store',
              name: 'onlineStoreUrl',
              minLength: TEXT_MIN_LENGTH,
              maxLength: TEXT_MAX_LENGTH,
            },
            // For these to show up as checkboxes, we need to include "ui:widget": "checkboxes" in uiSchema.
            existingStoreFeatures: {
              type: 'string',
              enum: [
                'Customer registration and information security features',
                'Shopping cart and order management capabilities',
                'Payment processing options including application of appropriate taxes and shipping costs at time of ordering',
                'Product catalogue, search and inventory status',
                'Website analytics and reporting capabilities',
              ],
            },
          },
          required: ['onlineStoreUrl', 'existingStoreFeatures'],
        },
      ],
    },
    otherCovidFunding: {
      oneOf: [
        {
          properties: {
            otherCovidFunding: { enum: [false] },
          },
        },
        {
          properties: {
            otherCovidFunding: { enum: [true] },
            otherPrograms: {
              type: 'string',
              title: 'If yes, please list all programs',
              name: 'otherPrograms',
              minLength: TEXT_MIN_LENGTH,
              maxLength: TEXT_MAX_LENGTH,
            },
          },
          required: ['otherPrograms'],
        },
      ],
    },
  },
  properties: {
    cannabisProducts: {
      type: 'boolean',
      title: 'Does your business sell Cannabis products?',
      default: false,
      name: 'cannabisProducts',
    },
    // Has a condition
    madeInBc: {
      type: 'boolean',
      title: 'Are your products manufactured and/or produced in BC?',
      default: false,
      name: 'madeInBc',
    },
    employees: {
      type: 'string',
      name: 'employees',
      title: 'How many employees does the business have on its payroll?',
      enum: ['None', '1-9', '10-49', '50-99', '100-149', '150-199', '200 or more'],
      // default: '',
    },
    importExportBusiness: {
      type: 'boolean',
      title: 'Is the business an import/export business?',
      default: false,
      name: 'importExportBusiness',
    },
    // Has condition, plus a second condition not done yet
    existingOnlineStore: {
      type: 'boolean',
      title: 'Does the business currently have an online store?',
      default: false,
      name: 'existingOnlineStore',
    },
    canMeetDeadline: {
      type: 'boolean',
      title:
        'If approved, are you able to utilize the grant funds and complete your online store proposal in twelve weeks?',
      default: false,
      name: 'canMeetDeadline',
    },
    // Has condition
    otherCovidFunding: {
      type: 'boolean',
      title: 'Has your business received funding from other provincial or federal COVID-19 recovery programs?',
      default: false,
      name: 'otherCovidFunding',
    },

    // GRANT PROPOSAL SECTION
    planForFunds: {
      type: 'string',
      title: 'Indicate how you plan to use the funds.',
      name: 'planForFunds',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    // The following arrays also have a field that is just a calculated 75% of the total cost.
    // I don't think we necessarily need them in here, we can just add the fields to the view when created.
    // That way we dont have a bunchof extra fields on the form, that don't require user input.
    serviceProviders: {
      type: 'array',
      title: 'Service Provider(s)',
      items: {
        type: 'object',
        properties: {
          provider: {
            type: 'string',
            title: 'Service provider',
            name: 'provider',
            minLength: TEXT_MIN_LENGTH,
            maxLength: TEXT_MAX_LENGTH,
          },
          serviceCost: {
            type: 'string',
            title: 'Cost of service',
            name: 'serviceCost',
            minLength: TEXT_MIN_LENGTH,
            maxLength: TEXT_MAX_LENGTH,
            pattern: CURRENCY_REGEX,
          },
        },
        required: ['provider', 'serviceCost'],
      },
    },
    customerAcquisition: {
      type: 'array',
      title: 'Digital Customer Acquisition',
      items: {
        type: 'object',
        properties: {
          provider: {
            type: 'string',
            title: 'Service provider',
            name: 'provider',
            minLength: TEXT_MIN_LENGTH,
            maxLength: TEXT_MAX_LENGTH,
          },
          serviceCost: {
            type: 'string',
            title: 'Cost of service',
            name: 'serviceCost',
            minLength: TEXT_MIN_LENGTH,
            maxLength: TEXT_MAX_LENGTH,
            pattern: CURRENCY_REGEX,
          },
        },
        required: ['provider', 'serviceCost'],
      },
    },
    staffTraining: {
      type: 'array',
      title: 'Staff Training Costs',
      items: {
        type: 'object',
        properties: {
          provider: {
            type: 'string',
            title: 'Service provider',
            name: 'provider',
            minLength: TEXT_MIN_LENGTH,
            maxLength: TEXT_MAX_LENGTH,
          },
          serviceCost: {
            type: 'string',
            title: 'Cost of service',
            name: 'serviceCost',
            minLength: TEXT_MIN_LENGTH,
            maxLength: TEXT_MAX_LENGTH,
            pattern: CURRENCY_REGEX,
          },
        },
        required: ['provider', 'serviceCost'],
      },
    },
    useOfGrant: {
      type: 'boolean',
      name: 'useOfGrant',
      title:
        'I understand that grant funding received through this program must be used to support the development and improvement of online shop of the business this application identifies only.',
    },
    personalInformation: {
      type: 'boolean',
      name: 'personalInformation',
      title:
        'I confirm that I understand that the personal information collected through this application process is collected for the administration of Online Shop Grant including to confirm residency, under s.26(c) of the Freedom of Information and Protection of Privacy Act. I also confirm that I have obtained authorization from the employees to whom the personal information relates to share that information with the Alacrity Canada for the above mentioned purposes. If you have questions about the collection you may contact the <Service provider contact info>',
    },
    taxImplications: {
      type: 'boolean',
      name: 'taxImplications',
      title:
        'I understand that the receipt of grants under this program may have implications under Canada’s Income Tax Act, administered by the federal government. I am responsible for obtaining appropriate advice with respect to my obligations under this legislation.',
    },
  },
  ObjectFieldTemplate,
};

export default schema2;
