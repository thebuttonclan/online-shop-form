import ObjectFieldTemplate from 'components/form/ObjectFieldTemplate';
import GrantProposalDescription from 'components/form/GrantProposalDescription';
import styled from 'styled-components';

// Only use on required elements if non-zero
const REQUIRED_TEXT_MIN_LENGTH = 0;
const TEXT_MAX_LENGTH = 1000;
const CURRENCY_REGEX = '^([1-9]{1})[0-9]*(.[0-9]{1,2})?$';
const COST_REGEX = '^[0-9]*(.[0-9]{1,2})?$';

const StyledUl = styled.ul`
  list-style-type: none;
  font-weight: 400 !important;
  font-size: 18px;
  line-height: 1.4285em;
  & li {
    margin-bottom: 5px;
  }
`;

const StaffTrainingDescription = () => (
  <>
    <p>
      Course fees only. Staff salary costs are not an eligible expense if training is conducted in-house by other staff.
    </p>
    <p>
      Please explain which training course, how many staff members and the cost of the course you intend to use the
      grant funding for (max 1000 characters)
    </p>
  </>
);

const GrantTermsHeader = () => (
  <>
    <h2>The Grant Applicant acknowledges to the Province that:</h2>
    <StyledUl>
      <li>
        (a) the Province will not be liable for any claims, losses, costs or expenses, whether arising in contract, tort
        or otherwise from or relating to anything done or not done by the Service Provider as a result of their
        engagement by the Grant Applicant including in respect of any assessments, advice or assistance that the
        Professional Service Provider may provide;
      </li>
      <li>
        (b) other than as provided by law, the Province has no duty to protect from disclosure any information provided
        by the Grant Applicant to the Service Provider should any such information be disclosed directly or indirectly
        to the Province; and
      </li>
      <li>
        (c) completion of the Grant Application including submission of the Recovery Plan and fulfillment of any other
        requirements of the Province in relation to the Grant will not impose an obligation on the Province to advance
        any amount of the Grant to the Grant Applicant. Any decision whether to advance a Grant or not is made solely at
        the discretion of the Province and is final without any requirement to give reasons.
      </li>
    </StyledUl>
  </>
);

const schema = {
  title: 'Launch Online Grant',
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
    'repeatableProducts',
    'cannabisProducts',
    'madeInBc',
    'employees',
    'importExportBusiness',
    'canMeetDeadline',
    'otherCovidFunding',
    'sector',
    // GRANT PROPOSAL SECTION
    'grantTerms',
  ],
  dependencies: {
    workSafeBcRegistered: {
      oneOf: [
        {
          properties: {
            workSafeBcRegistered: {
              enum: [false],
            },
          },
        },
        {
          properties: {
            workSafeBcRegistered: {
              enum: [true],
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
          },
          required: ['productionLocation'],
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
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    businessWebsite: {
      type: 'string',
      title: 'Website link (if applicable)',
      name: 'businessWebsite',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    primaryContactName: {
      type: 'string',
      title: 'Primary Contact Name',
      name: 'primaryContactName',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    primaryContactPosition: {
      type: 'string',
      title: 'Position/Title',
      name: 'primaryContactPosition',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
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
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    bcOwned: {
      type: 'boolean',
      title: 'Is the business owned by a B.C. resident or residents?',
      name: 'bcOwned',
    },
    locatedInBc: {
      type: 'boolean',
      title: 'Are the business’s sole or primary operations located in BC?',
      name: 'locatedInBc',
    },
    isCurrentlyOperating: {
      type: 'boolean',
      title: 'Is the business currently operating?',
      name: 'isCurrentlyOperating',
    },
    pstNumber: {
      type: 'string',
      title: 'What is your Provincial Sales Tax (PST) Number? (optional)',
      name: 'pstNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    bcRegistrationID: {
      type: 'string',
      title: 'What is your B.C. Registration ID?',
      name: 'bcRegistrationID',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    federalBusinessNumber: {
      type: 'string',
      title: 'What is your Federal Business Number?',
      name: 'federalBusinessNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    gstNumber: {
      type: 'string',
      title: 'What is your Goods and Services Tax (GST) Number?',
      name: 'gstNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    incomeTaxesFiled: {
      type: 'boolean',
      title: 'Have you filed taxes in 2019 or 2020?',
      name: 'incomeTaxesFiled',
    },
    revenue2019: {
      type: 'string',
      title: 'Last year’s revenue (2019 or the year preceding the application)',
      name: 'revenue2019',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
      pattern: CURRENCY_REGEX,
    },
    // Has a condition
    workSafeBcRegistered: {
      type: 'boolean',
      title: 'Has your business registered with WorkSafeBC?',
      name: 'workSafeBcRegistered',
    },
    workSafeBcRegistrationNumber: {
      type: 'string',
      title: 'What is your WorkSafeBC registration number (if applicable)?',
      name: 'workSafeBcRegistrationNumber',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    // Has a condition
    sector: {
      type: 'string',
      name: 'sector',
      title: 'What is your sector?',
      enum: ['', 'Retail', 'Manufacturing', 'Tourism', 'Artist', 'Agrifoods', 'Other'],
    },
    sectorOther: {
      type: 'string',
      title: 'Please specify',
      name: 'sectorOther',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    region: {
      type: 'string',
      name: 'region',
      title: 'What region does your business operate in?',
      enum: [
        '',
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
    },
    isIndigenous: {
      type: 'string',
      name: 'isIndigenous',
      title: 'Is this business owned by black, Indigenous or person of colour?',
      enum: ['', 'Black', 'Indigenous', 'Person of colour', 'No', 'Rather not answer'],
    },
    repeatableProducts: {
      type: 'boolean',
      title: 'Does the business provide services?',
      name: 'repeatableProducts',
    },
    cannabisProducts: {
      type: 'boolean',
      title: 'Does your business sell Cannabis products?',
      name: 'cannabisProducts',
    },
    // Has a condition
    madeInBc: {
      type: 'boolean',
      title: 'Are your products manufactured and/or produced in BC?',
      name: 'madeInBc',
    },
    productionLocation: {
      type: 'string',
      title: 'If no, please specify where',
      name: 'productionLocation',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    employees: {
      type: 'string',
      name: 'employees',
      title: 'How many employees does the business have on its payroll?',
      enum: ['', 'None', '1-9', '10-49', '50-99', '100-149', '150-199', '200 or more'],
    },
    importExportBusiness: {
      type: 'boolean',
      title: 'Is the business an import/export business?',
      name: 'importExportBusiness',
    },
    onlineStore: {
      type: 'object',
      name: 'onlineStore',
      title: '',
      properties: {
        existingOnlineStore: {
          // type: 'string',
          type: 'boolean',
          title: 'Does the business currently have an online store or an online booking system?',
          name: 'existingOnlineStore',
          // enum: ['-', 'Yes (Online Store)', 'Yes (Online Booking System)', 'No']
        },
        onlineStoreUrl: {
          type: 'string',
          title: 'If Yes, please provide a link to the online store or booking system',
          name: 'onlineStoreUrl',
          minLength: REQUIRED_TEXT_MIN_LENGTH,
          maxLength: TEXT_MAX_LENGTH,
        },
        existingStoreFeatures: {
          type: 'array',
          title: 'If the business has an existing online store or online booking system, please select all that apply',
          name: 'existingStoreFeatures',
          items: {
            type: 'string',
            enum: [
              'Online Store - Customer registration and information security features',
              'Online Store - Shopping cart and order management capabilities',
              'Online Store - Payment processing options including application of appropriate taxes and shipping costs at time of ordering',
              'Online Store - Product catalogue, search and inventory status',
              'Online Store - Website analytics and reporting capabilities',
              'Online Booking System - Customer registration and information security features',
              'Online Booking System - Schedule navigation and reservation management capabilities',
              'Online Booking System - Payment processing options including application of appropriate taxes',
              'Online Booking System - Automated replies and reminders',
              'Online Booking System - Website analytics and reporting capabilities',
            ],
          },
          uniqueItems: true,
        },
      },
      required: ['existingOnlineStore'],
      dependencies: {
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
              },
              required: ['onlineStoreUrl'],
            },
          ],
        },
      },
    },
    canMeetDeadline: {
      type: 'boolean',
      title:
        'If approved, are you able to utilize the grant funds and complete your online store or online booking system proposal in twelve weeks?',
      name: 'canMeetDeadline',
    },
    // Has condition
    otherCovidFunding: {
      type: 'boolean',
      title: 'Has your business received funding from other provincial or federal COVID-19 recovery programs?',
      name: 'otherCovidFunding',
    },
    otherPrograms: {
      type: 'string',
      title: 'If yes, please list all programs',
      name: 'otherPrograms',
      minLength: REQUIRED_TEXT_MIN_LENGTH,
      maxLength: TEXT_MAX_LENGTH,
    },
    costs: {
      type: 'object',
      name: 'costs',
      properties: {
        planForFunds: {
          type: 'string',
          name: 'planForFunds',
          title: 'Grant Proposal',
          subTitle: GrantProposalDescription(),
          minLength: REQUIRED_TEXT_MIN_LENGTH,
          maxLength: TEXT_MAX_LENGTH,
        },
        serviceProviderDescription: {
          type: 'string',
          subTitle:
            'Please explain for what and which service providers you intend to use the grant funding for (max 1000 characters)',
          name: 'serviceProviderDescription',
          break: true,
          minLength: REQUIRED_TEXT_MIN_LENGTH,
          maxLength: TEXT_MAX_LENGTH,
        },
        serviceProviderCosts: {
          type: 'number',
          title: 'Total amount for service provider costs',
          name: 'serviceProviderCosts',
          pattern: CURRENCY_REGEX,
        },
        customerAcquisitionDescription: {
          type: 'string',
          title: `Digital Customer Acquisition`,
          subTitle:
            'Please explain the digital marketing channels, tools and platforms you intend to use the grant funding for (max 1000 characters)',
          name: 'customerAcquisitionDescription',
          minLength: REQUIRED_TEXT_MIN_LENGTH,
          maxLength: TEXT_MAX_LENGTH,
        },
        customerAcquisitionCosts: {
          type: 'number',
          title: 'Total amount for digital customer acquisition',
          name: 'customerAcquisitionCosts',
          pattern: COST_REGEX,
        },
        staffTrainingDescription: {
          type: 'string',
          title: `Staff Training Costs`,
          subTitle: StaffTrainingDescription(),
          name: 'staffTrainingDescription',
          minLength: REQUIRED_TEXT_MIN_LENGTH,
          maxLength: TEXT_MAX_LENGTH,
        },
        staffTrainingCosts: {
          type: 'number',
          title: 'Total amount for staff training',
          name: 'staffTrainingCosts',
          pattern: COST_REGEX,
        },
      },
      required: [
        'planForFunds',
        'serviceProviderDescription',
        'serviceProviderCosts',
        'customerAcquisitionDescription',
        'staffTrainingDescription',
      ],
    },
    grantTerms: {
      type: 'boolean',
      name: 'grantTerms',
      header: GrantTermsHeader(),
      title: `I have reviewed and agree to these terms.`,
    },
    declarations: {
      type: 'array',
      title: `By submitting your application, you are declaring that all of the following statements are true as they relate to your business.
      All information provided is true and accurate.`,
      name: 'declarations',
      allRequired: true,
      items: {
        type: 'string',
        enum: [
          'I understand that grant funding received through this program must be used to support the development and improvement of online shop or online booking system of the business this application identifies only.',
          'I confirm that I understand that the personal information collected through this application process is collected for the administration of Launch Online Grant including to confirm residency, under s.26(c) of the Freedom of Information and Protection of Privacy Act. I also confirm that I have obtained authorization from the employees to whom the personal information relates to share that information with the Alacrity Canada for the above mentioned purposes. If you have questions about the collection you may contact info@launchonline.ca',
          'I understand that the receipt of grants under this program may have implications under Canada’s Income Tax Act, administered by the federal government. I am responsible for obtaining appropriate advice with respect to my obligations under this legislation.',
        ],
      },
      uniqueItems: true,
    },
  },
  ObjectFieldTemplate,
};

function getChildParentRelationships(schema) {
  const rel = {};
  Object.keys(schema.properties).forEach(field => {
    if (schema.properties[field].type === 'object') {
      Object.keys(schema.properties[field].properties).forEach(nestedField => {
        rel[nestedField] = field;
      });
    }
  });
  return rel;
}
export const childParentRelationships = getChildParentRelationships(schema);

export default schema;
