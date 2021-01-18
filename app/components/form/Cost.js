import { Form, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const Sdiv = styled.div`
  margin-bottom: 30px;
`;

const FieldName = styled.p`
  font-weight: bold;
`;

const SfinePrint = styled.p`
  font-size: 0.75em;
  color: #313132;
  opacity: 0.75;
`;

const Sinput = styled(Form.Input)`
  .ui.input {
    max-width: 300px;
  }
`;
const Cost = props => {
  const { name, title, inputType, pattern, minLength, maxLength } = props.schema;
  const { value, onChange, required } = props;

  // Add $
  return (
    <Sdiv>
      <h3>{title}</h3>
      <FieldName>Total Amount</FieldName>
      <Sinput
        id={`id_${name}`}
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        name={name}
        type={inputType}
        control={Input}
        onChange={e => onChange(e.target.value)}
        value={value}
      />
      <SfinePrint>Calculation of 75% to establish grant amount estimate</SfinePrint>
    </Sdiv>
  );
};

export default Cost;
