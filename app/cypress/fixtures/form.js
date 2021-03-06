const formFieldEntries = [
  // The commented numbers refer to the page number of the fields
  // 1
  {
    inputs: [{ getBy: '#id_businessName', text: 'my business' }],
  },
  // 2
  {
    inputs: [{ getBy: '#id_businessWebsite', text: 'my website' }],
  },
  // 3
  {
    inputs: [{ getBy: '#id_primaryContactName', text: 'bob' }],
  },
  // 4
  {
    inputs: [{ getBy: '#id_primaryContactPosition', text: 'boss' }],
  },
  // 5
  {
    inputs: [{ getBy: '#id_businessPhone', text: '111-111-1111' }],
  },
  // 6
  {
    inputs: [{ getBy: '#id_email', text: 'bob@gmail.com' }],
  },
  // 7
  {
    inputs: [{ getBy: '#id_businessAddress', text: '123 fake st.' }],
  },
  // 8
  {
    radios: [{ getBy: '#id_bcOwned' }],
  },
  // 9
  {
    radios: [{ getBy: '#id_locatedInBc' }],
  },
  // 10
  {
    radios: [{ getBy: '#id_isCurrentlyOperating' }],
  },
  // 11
  {
    inputs: [{ getBy: '#id_pstNumber', text: '222222' }],
  },
  // 12
  {
    inputs: [{ getBy: '#id_bcRegistrationID', text: '333333' }],
  },
  // 13
  {
    inputs: [{ getBy: '#id_federalBusinessNumber', text: '444444' }],
  },
  // 14
  {
    inputs: [{ getBy: '#id_gstNumber', text: '555555' }],
  },
  // 15
  {
    radios: [{ getBy: '#id_incomeTaxesFiled' }],
  },
  // 16
  {
    inputs: [{ getBy: '#id_revenue2019', text: '1000' }],
  },
  // 17
  {
    radios: [{ getBy: '#id_workSafeBcRegistered' }],
    inputs: [{ getBy: '#id_workSafeBcRegistrationNumber', text: '1111111111' }],
  },
  // 18
  {
    selects: [{ getBy: '#id_sector', value: 'Other' }],
    inputs: [{ getBy: '#id_sectorOther', text: 'fishing' }],
  },
  // 19
  {
    selects: [{ getBy: '#id_region', value: 'Metro Vancouver' }],
  },
  // 20
  {
    selects: [{ getBy: '#id_isIndigenous', value: 'No' }],
  },
  // 21
  {
    radios: [{ getBy: '#id_repeatableProducts' }, { getBy: '#id_services' }],
  },
  // 22
  {
    radios: [{ getBy: '#id_cannabisProducts' }],
  },
  // 23
  {
    radios: [{ getBy: '#id_madeInBc' }],
    inputs: [{ getBy: '#id_productionLocation', text: 'alberta' }],
  },
  // 24
  {
    selects: [{ getBy: '#id_employees', value: '1-9' }],
  },
  // 25
  {
    radios: [{ getBy: '#id_importExportBusiness' }],
  },
  // 26
  {
    radios: [{ getBy: '#id_existingOnlineStore' }],
    inputs: [{ getBy: '#id_onlineStoreUrl', text: 'www.store.com' }],
    checkboxes: [
      {
        getBy: '#id_existingStoreFeatures',
        value: 'Online Store - Customer registration and information security features',
      },
    ],
  },
  // 27
  {
    radios: [{ getBy: '#id_canMeetDeadline' }],
  },
  // 28
  {
    radios: [{ getBy: '#id_otherCovidFunding' }],
    inputs: [{ getBy: '#id_otherPrograms', text: 'cerb' }],
  },
  // 29
  {
    numbers: [
      { getBy: '#id_serviceProviderCosts', value: 100 },
      { getBy: '#id_customerAcquisitionCosts', value: 100 },
      { getBy: '#id_staffTrainingCosts', value: 100 },
    ],
    inputs: [
      { getBy: '#id_planForFunds', text: 'Rent' },
      { getBy: '#id_staffTrainingDescription', text: 'a' },
      { getBy: '#id_customerAcquisitionDescription', text: 'b' },
      { getBy: '#id_serviceProviderDescription', text: 'c' },
    ],
  },
  // 30
  {
    radios: [{ getBy: '#root_grantTerms' }],
  },
  // 31
  {
    radios: [{ getBy: '#root_declarations_0' }, { getBy: '#root_declarations_1' }, { getBy: '#root_declarations_2' }],
  },
];

export default formFieldEntries;
