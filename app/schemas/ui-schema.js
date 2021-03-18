import consolodateSchema from './consolidated-schema';
import CostsFieldTemplate from '../components/form/CostsFieldTemplate';
import BcRegistrationIdTemplate from '../components/form/BcRegistrationIdTemplate';
import GrantTermsTemplate from '../components/form/GrantTermsTemplate';
import DeclarationsTemplate from '../components/form/DeclarationsTemplate';
// This turns all of the boolean fields into radio buttons
const booleanFields = {};

Object.keys(consolodateSchema.properties).forEach(propertyName => {
  const property = consolodateSchema.properties[propertyName];

  if (property.type === 'boolean') {
    booleanFields[propertyName] = { 'ui:widget': 'radio' };
  }
});

const LinkedHelpText = (
  <div>
    To learn more about Registering your Business in BC, please follow this link to the BC Registry website at to
  </div>
);

const uiSchema = {
  // If overriding ui for boolean fields, make sure to include the widget as radio
  ...booleanFields,
  businessPhone: {
    'ui:help': 'Please use the format xxx-xxx-xxxx',
  },
  businessAddress: {
    'ui:help': 'For example: 1111 Government St., Victoria BC, A1A 1A1',
  },
  pstNumber: {
    'ui:help': 'For example: PST-1234-5678',
  },
  federalBusinessNumber: {
    'ui:help': 'For example: 123456789',
  },
  gstNumber: {
    'ui:help': 'For example: 123456789 RT 0001',
  },
  isCurrentlyOperating: {
    'ui:help':
      'Businesses not currently operating due to a public health order affecting their business or sector are not eligible for the program. Businesses that only operate seasonally, but that are ready to open during the appropriate season (and that otherwise meet all other eligibility criteria) will be considered operating.',
    'ui:widget': 'radio',
  },
  email: {
    'ui:help': 'Please use the format name@email.com',
  },
  revenue2019: {
    'ui:help': 'Please enter in a numerical value only (no symbols)',
  },
  workSafeBcRegistrationNumber: {
    'ui:help': 'This field is required if answering yes',
  },
  sectorOther: {
    'ui:help': 'This field is required if answering Other',
  },
  productionLocation: {
    'ui:help': 'This field is required if answering No',
  },
  grantTerms: {
    'ui:widget': 'checkbox',
    'ui:FieldTemplate': GrantTermsTemplate,
  },
  declarations: {
    'ui:widget': 'checkboxes',
    'ui:FieldTemplate': DeclarationsTemplate,
  },
  bcRegistrationID: {
    'ui:FieldTemplate': BcRegistrationIdTemplate,
  },
  onlineStore: {
    existingOnlineStore: {
      'ui:widget': 'radio',
    },
    existingBookingSystemFeatures: {
      'ui:widget': 'checkboxes',
    },
    onlineStoreUrl: {
      'ui:help': 'This field is required if answering Yes',
    },
    otherPrograms: {
      'ui:help': 'This field is required if answering Yes',
    },
    existingStoreFeatures: {
      'ui:widget': 'checkboxes',
    },
  },
  otherPrograms: {
    'ui:widget': 'TextareaWidget',
  },
  costs: {
    'ui:ObjectFieldTemplate': CostsFieldTemplate,
    planForFunds: {
      'ui:widget': 'TextareaWidget',
    },
    serviceProviderCosts: {
      'ui:widget': 'Cost',
    },
    serviceProviderDescription: {
      'ui:widget': 'TextareaWidget',
    },
    customerAcquisitionCosts: {
      'ui:widget': 'Cost',
    },
    customerAcquisitionDescription: {
      'ui:widget': 'TextareaWidget',
    },
    staffTrainingCosts: {
      'ui:widget': 'Cost',
    },
    staffTrainingDescription: {
      'ui:widget': 'TextareaWidget',
    },
  },

  // This prevents conditional fields from rendering at the end of the form
  'ui:order': [
    'businessName',
    'businessWebsite',
    'primaryContactName',
    'primaryContactPosition',
    'businessPhone',
    'email',
    'businessAddress',
    'bcOwned',
    'locatedInBc',
    'isCurrentlyOperating',
    'pstNumber',
    'bcRegistrationID',
    'federalBusinessNumber',
    'gstNumber',
    'incomeTaxesFiled',
    'revenue2019',
    'workSafeBcRegistered',
    'workSafeBcRegistrationNumber',
    'sector',
    'sectorOther',
    'region',
    'isIndigenous',
    'repeatableProducts',
    'cannabisProducts',
    'madeInBc',
    'productionLocation',
    'employees',
    'importExportBusiness',
    'onlineStore',
    'existingOnlineStore',
    'onlineStoreUrl',
    'existingStoreFeatures',
    'canMeetDeadline',
    'otherCovidFunding',
    'otherPrograms',
    'planForFunds',
    'costs',
    'serviceProviderCosts',
    'customerAcquisitionCosts',
    'staffTrainingCosts',
    'grantTerms',
    'declarations',
  ],
};

export default uiSchema;
