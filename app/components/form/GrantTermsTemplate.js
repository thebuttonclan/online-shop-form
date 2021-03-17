import React, { useState } from 'react';
import styled from 'styled-components';

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
    <>
      {props.schema.header && <h2>{props.schema.header}</h2>}
      <div>{props.children}</div>
    </>
  );
}
