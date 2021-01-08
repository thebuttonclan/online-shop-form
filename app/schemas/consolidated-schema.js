import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';

const schema = {
  title: 'Example Form',
  type: 'object',
  required: [
    'businessName',
    'primaryContactName',
    'primaryContactPosition',
    'businessPhone',
    'email',
    'Business Address',
    'bcOwned',
    'locatedInBc',
    'isCurrentlyOperating',
    'bcRegistrationID',
    'federalBusinessNumber',
    'gstNumber',
    'incomeTaxesFiled',
    'revenue2019',
    'workSafeBcRegistered',
    'region',
    'isIndigenous',
    'cannabisProducts',
    'madeInBc',
    'employees',
    'importExportBusiness',
    'existingOnlineStore',
    'canMeetDeadline',
    'otherCovidFunding',
    'sector',
    // GRANT PROPOSAL SECTION
    'planForFunds',
    'serviceProviders',
    'customerAcquisition',
    'staffTraining',
  ],
  dependencies: {
    workSafeBcRegistered: {
      oneOf: [
        {
          properties: {
            workSafeBcRegistered: { enum: [false] },
          },
        },
        {
          properties: {
            workSafeBcRegistered: { enum: [true] },
            workSafeBcRegistrationNumber: {
              type: 'string',
              title: 'WorkSafeBC registration number',
              name: 'workSafeBcRegistrationNumber',
            },
          },
          required: ['workSafeBcRegistrationNumber'],
        },
      ],
    },
    sector: {
      oneOf: [
        {
          properties: {
            sector: {
              enum: ['Retail', 'Manufacturing', 'Tourism', 'Artist', 'Agrifoods'],
            },
          },
        },
        {
          properties: {
            sector: {
              enum: ['Other'],
            },
            // Once we have a UI we can try to find a way to consolidate sectorOther to be the value of sector to avoid 2 fields
            sectorOther: { type: 'string', title: 'Please specify', name: 'businessName', isRequired: true },
          },
          required: ['sectorOther'],
        },
      ],
    },
    madeInBc: {
      oneOf: [
        {
          properties: {
            madeInBc: { enum: [false] },
          },
        },
        {
          properties: {
            madeInBc: { enum: [true] },
            // not the best name here, but like sector maybe we consolidate to one field? discuss
            productionLocation: { type: 'string', title: 'Where', name: 'productionLocation' },
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
            onlineStoreUrl: { type: 'string', title: 'Link to online store', name: 'onlineStoreUrl' },
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
            otherPrograms: { type: 'string', title: 'WorkSafeBC registration number', name: 'otherPrograms' },
          },
          required: ['otherPrograms'],
        },
      ],
    },
  },
  properties: {
    businessName: { type: 'string', title: 'Name of Applicant Business', name: 'businessName', isRequired: true },
    businessWebsite: { type: 'string', title: 'Website link (if applicable)', name: 'businessWebsite' },
    primaryContactName: { type: 'string', title: 'Primary Contact Name', name: 'primaryContactName', isRequired: true },
    primaryContactPosition: {
      type: 'string',
      title: 'Position/Title',
      name: 'primaryContactPosition',
      isRequired: true,
    },
    businessPhone: { type: 'string', title: 'Business Phone number', name: 'businessPhone', isRequired: true },
    email: { type: 'string', title: 'Email', name: 'email', inputType: 'email', isRequired: true },
    businessAddress: { type: 'string', title: 'Business Address', name: 'businessAddress', isRequired: true },
    // businessLicense was supposed to be a file upload, but we're no longer doing them.
    // Need confirmation on what (if anything) we're using in it's place.
    bcOwned: {
      type: 'boolean',
      title: 'Is the business owned by a BC resident or residents',
      default: false,
      name: 'bcOwned',
      isRequired: true,
    },
    locatedInBc: {
      type: 'boolean',
      title: 'Is the business owned by a BC resident or residents',
      default: false,
      name: 'locatedInBc',
      isRequired: true,
    },
    isCurrentlyOperating: {
      type: 'boolean',
      title: 'Is the business currently operating',
      default: false,
      name: 'isCurrentlyOperating',
      isRequired: true,
    },
    pstNumber: { type: 'string', title: 'PST Number', name: 'pstNumber' },
    bcRegistrationID: { type: 'string', title: 'BC Registration ID', name: 'bcRegistrationID', isRequired: true },
    federalBusinessNumber: {
      type: 'string',
      title: 'Business Number (federal)',
      name: 'federalBusinessNumber',
      isRequired: true,
    },
    gstNumber: { type: 'string', title: 'GST number', name: 'gstNumber', isRequired: true },
    incomeTaxesFiled: {
      type: 'boolean',
      title: 'Have you filed last years income taxes?',
      default: false,
      name: 'incomeTaxesFiled',
      isRequired: true,
    },
    revenue2019: { type: 'string', title: 'Last year’s revenue (2019)', name: 'revenue2019', isRequired: true },
    // Has a condition
    workSafeBcRegistered: {
      type: 'boolean',
      title: 'Has your business registered with WorkSafeBC?',
      default: false,
      name: 'workSafeBcRegistered',
      isRequired: true,
    },
    // Has a condition
    sector: {
      type: 'string',
      name: 'sector',
      title: 'Sector',
      enum: ['Retail', 'Manufacturing', 'Tourism', 'Artist', 'Agrifoods', 'Other'],
      // default: '',
      isRequired: true,
    },
    region: {
      type: 'string',
      name: 'region',
      title: 'Region',
      enum: [
        'Capital Regional District',
        'Metro Vancouver',
        'Vancouver Island (except CRD)',
        'Northeast',
        'North Coast and Nechako',
        'Cariboo',
        'Thompson Okanagan',
        'Kootenay',
        'Southwest (except Metro Van)',
        'North Shore and Sunshine Coast',
      ],
      // default: '',
      isRequired: true,
    },
    isIndigenous: {
      type: 'string',
      name: 'isIndigenous',
      title: 'Region',
      enum: ['Yes', 'No', 'Rather not answer'],
      // default: '',
      isRequired: true,
    },
    repeatableProducts: {
      type: 'boolean',
      title: 'Does the business sell repeatable products?',
      default: false,
      name: 'repeatableProducts',
      isRequired: true,
    },
    cannabisProducts: {
      type: 'boolean',
      title: 'Does your business sell Cannabis products?',
      default: false,
      name: 'cannabisProducts',
      isRequired: true,
    },
    // Has a condition
    madeInBc: {
      type: 'boolean',
      title: 'Are your products manufactured and/or produced in BC?',
      default: false,
      name: 'madeInBc',
      isRequired: true,
    },
    employees: {
      type: 'string',
      name: 'employees',
      title: 'How many employees does the business have on its payroll?',
      enum: ['None', '1-9', '10-49', '50-99', '100-149', '150-199', '200 or more'],
      // default: '',
      isRequired: true,
    },
    importExportBusiness: {
      type: 'boolean',
      title: 'Is the business an import/export business?',
      default: false,
      name: 'importExportBusiness',
      isRequired: true,
    },
    // Has condition, plus a second condition not done yet
    existingOnlineStore: {
      type: 'boolean',
      title: 'Is the business an import/export business?',
      default: false,
      name: 'existingOnlineStore',
      isRequired: true,
    },
    canMeetDeadline: {
      type: 'boolean',
      title:
        'If approved, are you able to utilize the grant funds and complete your online store proposal in twelve weeks?',
      default: false,
      name: 'canMeetDeadline',
      isRequired: true,
    },
    // Has condition
    otherCovidFunding: {
      type: 'boolean',
      title: 'Has your business received funding from other provincial or federal COVID-19 recovery programs?',
      default: false,
      name: 'otherCovidFunding',
      isRequired: true,
    },

    // GRANT PROPOSAL SECTION
    planForFunds: { type: 'string', title: 'PST Number', name: 'planForFunds', isRequired: true },
    // The following arrays also have a field that is just a calculated 75% of the total cost.
    // I don't think we necessarily need them in here, we can just add the fields to the view when created.
    // That way we dont have a bunchof extra fields on the form, that don't require user input.
    serviceProviders: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          provider: { type: 'string', title: 'Service provider', name: 'provider' },
          serviceCost: { type: 'string', title: 'Cost of service', name: 'serviceCost' },
        },
        dependencies: ['provider', 'serviceCost'],
      },
      isRequired: true,
    },
    customerAcquisition: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          provider: { type: 'string', title: 'Service provider', name: 'provider' },
          serviceCost: { type: 'string', title: 'Cost of service', name: 'serviceCost' },
        },
        dependencies: ['provider', 'serviceCost'],
      },
    },
    staffTraining: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          provider: { type: 'string', title: 'Service provider', name: 'provider' },
          serviceCost: { type: 'string', title: 'Cost of service', name: 'serviceCost' },
        },
        dependencies: ['provider', 'serviceCost'],
      },
      isRequired: true,
    },
  },
  ObjectFieldTemplate,
};