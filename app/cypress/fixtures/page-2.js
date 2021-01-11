const { version: appVersion } = require('../../package.json');

const pageTwoFieldEntries = {
  inputs: [
    { getBy: '#id_onlineStoreUrl', text: 'www.store.com' },
    { getBy: '#id_otherPrograms', text: 'cerb' },
    { getBy: '#id_planForFunds', text: 'Rent' },
  ],
  checkboxes: [
    { getBy: '#id_madeInBc' },
    { getBy: '#id_existingOnlineStore' },
    { getBy: '#id_otherCovidFunding' },
    { getBy: '#id_cannabisProducts' },
    { getBy: '#id_importExportBusiness' },
    { getBy: '#id_existingOnlineStore' },
    { getBy: '#id_canMeetDeadline' },
  ],
  selects: [
    { getBy: '#id_existingStoreFeatures', value: 'Shopping cart and order management capabilities' },
    { getBy: '#id_employees', value: '1-9' },
  ],
  arrays: {
    buttons: [
      { getBy: '#btn-add-root_serviceProviders' },
      { getBy: '#btn-add-root_customerAcquisition' },
      { getBy: '#btn-add-root_staffTraining' },
    ],
    inputs: [
      { getBy: '#id_provider', text: 'test', parent: 'serviceProviders', type: 'provider' },
      { getBy: '#id_serviceCost', text: '$10', parent: 'serviceProviders', type: 'serviceCost' },
      { getBy: '#id_customerAcquisitionProvider', text: 'test', parent: 'customerAcquisition', type: 'provider' },
      { getBy: '#id_customerAcquisitionCost', text: '$30', parent: 'customerAcquisition', type: 'serviceCost' },
      { getBy: '#id_staffTrainingProvider', text: 'test', parent: 'staffTraining', type: 'provider' },
      { getBy: '#id_staffTrainingCost', text: '$20', parent: 'staffTraining', type: 'serviceCost' },
    ],
  },
};

const expectedResult = { formVersion: appVersion };

pageTwoFieldEntries.inputs.forEach(input => {
  const name = input.getBy.split('_')[1];
  expectedResult[name] = input.text;
});

pageTwoFieldEntries.checkboxes.forEach(checkbox => {
  const name = checkbox.getBy.split('_')[1];
  expectedResult[name] = true;
});

pageTwoFieldEntries.selects.forEach(select => {
  const name = select.getBy.split('_')[1];
  expectedResult[name] = select.value;
});

export { expectedResult, pageTwoFieldEntries };
