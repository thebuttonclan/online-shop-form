const { version: appVersion } = require('../../package.json');

const schemaFieldEntries = {
  inputs: [
    { getBy: '#id_businessName', text: 'my business' },
    { getBy: '#id_businessWebsite', text: 'my website' },
    { getBy: '#id_primaryContactName', text: 'bob' },
    { getBy: '#id_primaryContactPosition', text: 'boss' },
    { getBy: '#id_businessPhone', text: '111-111-1111' },
    { getBy: '#id_email', text: 'bob@gmail.com' },
    { getBy: '#id_businessAddress', text: '123 fake st.' },
    { getBy: '#id_workSafeBcRegistrationNumber', text: '1111111111' },
    { getBy: '#id_sectorOther', text: 'fishing' },
    { getBy: '#id_pstNumber', text: '222222' },
    { getBy: '#id_bcRegistrationID', text: '333333' },
    { getBy: '#id_federalBusinessNumber', text: '444444' },
    { getBy: '#id_gstNumber', text: '555555' },
    { getBy: '#id_revenue2019', text: '1000' },
    { getBy: '#id_onlineStoreUrl', text: 'www.store.com' },
    { getBy: '#id_otherPrograms', text: 'cerb' },
    { getBy: '#id_planForFunds', text: 'Rent' },
    { getBy: '#serviceProviderCosts', text: 'Rent' },
    { getBy: '#id_customerAcquisitionCosts', text: 'Rent' },
    { getBy: '#id_staffTrainingCosts', text: 'Rent' },
  ],
  checkboxes: [
    { getBy: '#id_bcOwned' },
    { getBy: '#id_locatedInBc' },
    { getBy: '#id_isCurrentlyOperating' },
    { getBy: '#id_incomeTaxesFiled' },
    { getBy: '#id_workSafeBcRegistered' },
    { getBy: '#id_repeatableProducts' },
    { getBy: '#id_madeInBc' },
    { getBy: '#id_existingOnlineStore' },
    { getBy: '#id_otherCovidFunding' },
    { getBy: '#id_cannabisProducts' },
    { getBy: '#id_importExportBusiness' },
    { getBy: '#id_existingOnlineStore' },
    { getBy: '#id_canMeetDeadline' },
    { getBy: '#id_useOfGrant' },
    { getBy: '#id_personalInformation' },
    { getBy: '#id_taxImplications' },
  ],
  selects: [
    { getBy: '#id_sector', value: 'Other' },
    { getBy: '#id_region', value: 'Metro Vancouver' },
    { getBy: '#id_isIndigenous', value: 'No' },
    { getBy: '#id_existingStoreFeatures', value: 'Shopping cart and order management capabilities' },
    { getBy: '#id_employees', value: '1-9' },
  ],
};

const expectedResult = { formVersion: appVersion };

schemaFieldEntries.inputs.forEach(input => {
  const name = input.getBy.split('_')[1];
  expectedResult[name] = input.text;
});

schemaFieldEntries.checkboxes.forEach(checkbox => {
  const name = checkbox.getBy.split('_')[1];
  expectedResult[name] = true;
});

schemaFieldEntries.selects.forEach(select => {
  const name = select.getBy.split('_')[1];
  expectedResult[name] = select.value;
});

export default schemaFieldEntries;
