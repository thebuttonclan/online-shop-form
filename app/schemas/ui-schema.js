import consolodateSchema from './consolidated-schema';

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
  customerRegistration: {
    'ui:widget': 'checkbox',
  },
  paymentProcessing: {
    'ui:widget': 'checkbox',
  },
  shoppingCart: {
    'ui:widget': 'checkbox',
  },
  productCatalogue: {
    'ui:widget': 'checkbox',
  },
  websiteAnalytics: {
    'ui:widget': 'checkbox',
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
    'existingOnlineStore',
    'onlineStoreUrl',
    'canMeetDeadline',
    'otherCovidFunding',
    'otherPrograms',
    'customerRegistration',
    'shoppingCart',
    'paymentProcessing',
    'productCatalogue',
    'websiteAnalytics',
    'planForFunds',
    'serviceProviderCosts',
    'customerAcquisitionCosts',
    'staffTrainingCosts',
    'useOfGrant',
    'personalInformation',
    'taxImplications',
  ],
};

export default uiSchema;
