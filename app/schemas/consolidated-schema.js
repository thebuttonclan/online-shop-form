import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';

const TEXT_MIN_LENGTH = 1;
const TEXT_MAX_LENGTH = 1000;
const CURRENCY_REGEX = '^([1-9]{1})[0-9]*(.[0-9]{1,2})?$';

const schema = {
  title: 'Example Form',
  type: 'object',
  required: [
    'businessName',
    'primaryContactName',
    'primaryContactPosition',
    'businessPhone',
    'email',
    'businessAddress',
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
    'useOfGrant',
    'personalInformation',
    'taxImplications',
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
              minLength: TEXT_MIN_LENGTH,
              maxLength: TEXT_MAX_LENGTH,
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
            sectorOther: {
              type: 'string',
              title: 'Please specify',
              name: 'businessName',
              minLength: TEXT_MIN_LENGTH,
              maxLength: TEXT_MAX_LENGTH,
            },
          },
          required: ['sectorOther'],
        },
      ],
    },
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
              title: 'Where',
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
    businessName: {
      type: 'string',
      title: 'Name of Applicant Business',
      name: 'businessName',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    businessWebsite: {
      type: 'string',
      title: 'Website link (if applicable)',
      name: 'businessWebsite',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    primaryContactName: {
      type: 'string',
      title: 'Primary Contact Name',
      name: 'primaryContactName',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    primaryContactPosition: {
      type: 'string',
      title: 'Position/Title',
      name: 'primaryContactPosition',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    businessPhone: {
      type: 'string',
      title: 'Business Phone number',
      name: 'businessPhone',
      pattern: '^[0-9]{3}-[0-9]{3}-[0-9]{4}$',
    },
    email: {
      type: 'string',
      title: 'Email',
      name: 'email',
      inputType: 'email',
      pattern: '(.+)@(.+){2,}.(.+){2,}',
    },
    businessAddress: {
      type: 'string',
      title: 'Business Address',
      name: 'businessAddress',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    // businessLicense was supposed to be a file upload, but we're no longer doing them.
    // Need confirmation on what (if anything) we're using in it's place.
    bcOwned: {
      type: 'boolean',
      title: 'Is the business owned by a BC resident or residents',
      default: false,
      name: 'bcOwned',
    },
    locatedInBc: {
      type: 'boolean',
      title: 'Are the business’s sole or primary operations located in BC',
      default: false,
      name: 'locatedInBc',
    },
    isCurrentlyOperating: {
      type: 'boolean',
      title: 'Is the business currently operating',
      default: false,
      name: 'isCurrentlyOperating',
    },
    pstNumber: {
      type: 'string',
      title: 'PST Number',
      name: 'pstNumber',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    bcRegistrationID: {
      type: 'string',
      title: 'BC Registration ID',
      name: 'bcRegistrationID',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    federalBusinessNumber: {
      type: 'string',
      title: 'Business Number (federal)',
      name: 'federalBusinessNumber',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    gstNumber: {
      type: 'string',
      title: 'GST number',
      name: 'gstNumber',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    incomeTaxesFiled: {
      type: 'boolean',
      title: 'Have you filed last years income taxes?',
      default: false,
      name: 'incomeTaxesFiled',
    },
    revenue2019: {
      type: 'string',
      title: 'Last year’s revenue (2019)',
      name: 'revenue2019',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
      pattern: CURRENCY_REGEX,
    },
    // Has a condition
    workSafeBcRegistered: {
      type: 'boolean',
      title: 'Has your business registered with WorkSafeBC?',
      default: false,
      name: 'workSafeBcRegistered',
    },
    // Has a condition
    sector: {
      type: 'string',
      name: 'sector',
      title: 'Sector',
      enum: ['Retail', 'Manufacturing', 'Tourism', 'Artist', 'Agrifoods', 'Other'],
      // default: '',
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
    },
    isIndigenous: {
      type: 'string',
      name: 'isIndigenous',
      title: 'Is this an Indigenous Business?',
      enum: ['Yes', 'No', 'Rather not answer'],
      // default: '',
    },
    repeatableProducts: {
      type: 'boolean',
      title: 'Does the business sell repeatable products?',
      default: false,
      name: 'repeatableProducts',
    },
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
      title:
        'I understand that grant funding received through this program must be used to support the development and improvement of online shop of the business this application identifies only.',
    },
    personalInformation: {
      type: 'boolean',
      title:
        'I confirm that I understand that the personal information collected through this application process is collected for the administration of Online Shop Grant including to confirm residency, under s.26(c) of the Freedom of Information and Protection of Privacy Act. I also confirm that I have obtained authorization from the employees to whom the personal information relates to share that information with the Alacrity Canada for the above mentioned purposes. If you have questions about the collection you may contact the <Service provider contact info>',
    },
    taxImplications: {
      type: 'boolean',
      title:
        'I understand that the receipt of grants under this program may have implications under Canada’s Income Tax Act, administered by the federal government. I am responsible for obtaining appropriate advice with respect to my obligations under this legislation.',
    },
  },
  ObjectFieldTemplate,
};
