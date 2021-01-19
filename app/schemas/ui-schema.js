import consolodateSchema from './consolidated-schema';
import CostsFieldTemplate from '../components/form/CostsFieldTemplate';
// This turns all of the boolean fields into radio buttons
const booleanFields = {};

Object.keys(consolodateSchema.properties).forEach(propertyName => {
  const property = consolodateSchema.properties[propertyName];

  if (property.type === 'boolean') {
    booleanFields[propertyName] = { 'ui:widget': 'radio' };
  }
});

const uiSchema = {
  ...booleanFields,
  businessPhone: {
    'ui:help': 'Please use the format xxx-xxx-xxxx',
  },
  businessAddress: {
    'ui:help': 'For example: 1111 Government St. V8Z 1M2',
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
  onlineStore: {
    existingOnlineStore: {
      'ui:widget': 'radio',
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
  planForFunds: {
    'ui:widget': 'TextareaWidget',
  },
  costs: {
    'ui:FieldTemplate': CostsFieldTemplate,
    serviceProviderCosts: {
      'ui:widget': 'Cost',
    },
    customerAcquisitionCosts: {
      'ui:widget': 'Cost',
    },
    staffTrainingCosts: {
      'ui:widget': 'Cost',
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
    'useOfGrant',
    'personalInformation',
    'taxImplications',
  ],
};

export default uiSchema;
