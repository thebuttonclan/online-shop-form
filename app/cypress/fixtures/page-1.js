const pageOneFieldEntries = {
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
  ],
  checkboxes: [
    { getBy: '#id_bcOwned' },
    { getBy: '#id_locatedInBc' },
    { getBy: '#id_isCurrentlyOperating' },
    { getBy: '#id_incomeTaxesFiled' },
    { getBy: '#id_workSafeBcRegistered' },
    { getBy: '#id_repeatableProducts' },
  ],
  selects: [
    { getBy: '#id_sector', value: 'Other' },
    { getBy: '#id_region', value: 'Metro Vancouver' },
    { getBy: '#id_isIndigenous', value: 'No' },
  ],
};

export default pageOneFieldEntries;
