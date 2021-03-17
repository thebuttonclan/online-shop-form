import React, { useState } from 'react';
import styled from 'styled-components';
import { Message } from 'semantic-ui-react';
import HrefLink from 'components/HrefLink';

const Sdiv = styled.div`
  font-weight: bold;
  margin: 0 0 0.28571429rem 0;
  font-size: 0.92857143em;
`;

const SInfo = styled.div`
  line-height: 1.4285em;
  font-size: 0.78571429em;
`;

export default function BcRegistrationIdTemplate(props) {
  return (
    <div>
      {props.children}
      <Message info>
        <SInfo>
          To learn more about Registering your Business in BC, please follow this link to the BC Registry website at{' '}
          <HrefLink
            href="https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/starting-a-business/starting-a-restaurant-in-bc/register-your-business"
            blank
          >
            https://www2.gov.bc.ca/gov/content/employment-business/business/managing-a-business/starting-a-business/starting-a-restaurant-in-bc/register-your-business
          </HrefLink>
        </SInfo>
      </Message>
    </div>
  );
}
