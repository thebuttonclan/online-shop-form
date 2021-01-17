import React, { useRef } from 'react';
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

const MAX_GRANT_AMOUNT = 7500;

export default function CostsFieldTemplate(props) {
  const inputEl = useRef(null);

  props.schema.grandAmountRef = inputEl;

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
        <Sinput ref={inputEl} type="text" disabled id="id_grant_request" />
      </div>
    </div>
  );
}
