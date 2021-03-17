import React, { useState } from 'react';
import styled from 'styled-components';
import { calculateGrantAmount } from 'schemas/helpers';
import { formatCurrency } from 'helpers/number';
import HrefLink from 'components/HrefLink';

const Sdiv = styled.div`
  font-weight: bold;
  margin: 0 0 0.28571429rem 0;
  font-size: 0.92857143em;
`;

const SInfo = styled.div`
  font-weight: bold;
  padding-bottom: 30px;
`;

const STitleItalic = styled.h2`
  font-style: italic;
  margin: 0;
  margin-bottom: 20px;
`;

const STitle = styled.h2`
  margin: 0;
  &::after {
    content: '*';
    display: inline-block;
    vertical-align: top;
    margin: -0.2em 0 0 0.2em;
    color: #db2828;
  }
`;

const BreakTitle = () => (
  <>
    <SInfo>
      Include below in each section the complete cost estimates for each cost grouping (service provider, digital
      customer acquisition or training costs). The total grant amount requested through this application is
      auto-calculated at the bottom of this page: 75% of the eligible costs (max of $7,500).
    </SInfo>
    <SInfo>
      Please refer to eligible expenses, online shop completion checklist and grant limit information in the{' '}
      <HrefLink href="/files/program_guide.pdf" blank>
        program guide
      </HrefLink>
      .
    </SInfo>
    <STitle>Service Provider Costs</STitle>
    <STitleItalic>This category MUST be used in your proposal</STitleItalic>
  </>
);

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
      {props.properties.map(el => (
        <div style={{ marginTop: '20px' }}>
          {el.content.props.schema.break && <BreakTitle />}
          {el.content}
        </div>
      ))}
      {typeof window === 'object' && (
        <div>
          <Sdiv>Total Grant Amount Requested (max. ${MAX_GRANT_AMOUNT})</Sdiv>
          <div id={`id_total_grant_request`}>{formatCurrency(Math.min(grantAmount, MAX_GRANT_AMOUNT))}</div>
        </div>
      )}
    </div>
  );
}
