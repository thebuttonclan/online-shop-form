import React from 'react';
import styled from 'styled-components';
import HrefLink from 'components/HrefLink';

const Sdiv = styled.div`
  font-weight: bold;
  margin: 0 0 0.28571429rem 0;
  font-size: 0.92857143em;
`;

const SInfo = styled.div`
  font-weight: bold;
`;

const Sinput = styled.input`
  margin-bottom: 30px !important;
  max-width: 300px;
`;

export default function CostsFieldTemplate(props) {
  const MAX_GRANT_AMOUNT = 7500;
  function getGrantRequest() {
    // Because Next uses SSR, it doesn't have the document object right away, we need to check for process.browser
    if (process.browser && document) {
      // And once we have it, the elements haven't necessarily loaded yet.
      const serviceProvider = document.getElementById('id_serviceProviderCosts') || { value: 0 };
      // So when its slow, serviceProvider.value doesn't exist right away and this throws an error.
      const serviceProviderCosts = parseFloat(serviceProvider.value) || 0;

      const customerAcquisition = document.getElementById('id_customerAcquisitionCosts') || { value: 0 };
      const customerAcquisitionCosts = parseFloat(customerAcquisition.value) || 0;

      const staffTraining = document.getElementById('id_staffTrainingCosts') || { value: 0 };
      const staffTrainingCosts = parseFloat(staffTraining.value) || 0;

      const total = 0.75 * (serviceProviderCosts + customerAcquisitionCosts + staffTrainingCosts);
      return total.toFixed(2);
    }
    return null;
  }

  return (
    <div>
      <SInfo>
        Provide included cost estimates indicating how much funding you may need for each cost grouping.
        <br />
        <br />
        Please refer to elligible expenses, online shop completion checklist and grant limit information in the
        <HrefLink href="/program-guide"> program guide</HrefLink>.
      </SInfo>
      {props.children}
      <div>
        <Sdiv>Total Grant Amount Requested (max. ${MAX_GRANT_AMOUNT})</Sdiv>
        <Sinput type="text" disabled value={Math.min(getGrantRequest(), MAX_GRANT_AMOUNT)} id="id_grant_request" />
      </div>
    </div>
  );
}
