import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';

const TEXT_MIN_LENGTH = 1;
const TEXT_MAX_LENGTH = 1000;

const schema1 = {
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
      isRequired: true,
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    businessPhone: {
      type: 'string',
      title: 'Business Phone number',
      name: 'businessPhone',
      pattern: '^(+d{1,2}s)?(?d{3})?[s.-]d{3}[s.-]d{4}$',
    },
    email: {
      type: 'string',
      title: 'Email',
      name: 'email',
      inputType: 'email',
      pattern: '\b[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,}\b',
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
      isRequired: true,
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
      isRequired: true,
    },
    revenue2019: {
      type: 'string',
      title: 'Last year’s revenue (2019)',
      name: 'revenue2019',
      minLength: TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
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
  },
  ObjectFieldTemplate,
};

export default schema1;
