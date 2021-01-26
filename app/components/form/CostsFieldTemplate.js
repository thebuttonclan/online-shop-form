import React, { useState } from 'react';
import styled from 'styled-components';
import HrefLink from 'components/HrefLink';
import { calculateGrantAmount } from 'schemas/helpers';
import { formatCurrency } from 'helpers/number';

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

const MAX_GRANT_AMOUNT = 7500;

export default function CostsFieldTemplate(props) {
  const { formContext, schema } = props;
  const { initialFormData } = formContext;

  const initialGrantAmount = calculateGrantAmount(initialFormData);

  const [grantAmount, setGrantAmount] = useState(initialGrantAmount);

  // Note that it mutates the page schema to have `setGrantAmount` available in onChange event
  schema.setGrantAmount = setGrantAmount;

  return (
    <div>
      <SInfo>
        Please provide us with the complete cost estimates for each cost grouping (service provider, digital customer
        acquisition or training costs). The total grant amount requested through this application is auto-calculated at
        the bottom of this page: 75% of the eligible costs (max of $7,500).
        <br />
        <br />
        Please refer to eligible expenses, online shop completion checklist and grant limit information in the
        <HrefLink href="/files/program_guide.pdf"> program guide</HrefLink>.
      </SInfo>
      {props.children}
      {typeof window === 'object' && (
        <div>
          <Sdiv>Total Grant Amount Requested (max. ${MAX_GRANT_AMOUNT})</Sdiv>
          <div id={`id_total_grant_request`}>{formatCurrency(Math.min(grantAmount, MAX_GRANT_AMOUNT))}</div>
        </div>
      )}
    </div>
  );
}
