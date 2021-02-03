import { Form, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import { calculateGrantAmount } from 'schemas/helpers';
import { useContext } from 'react';
import { GrantCalculationContext } from 'components/form/CostsFieldTemplate';

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
  const { value, onChange, required, formContext } = props;
  const setGrantAmount = useContext(GrantCalculationContext);

  const handleChange = (e, { value }) => {
    onChange(value);
    const grant = calculateGrantAmount({ ...formContext.savedData?.costs, [name]: value });
    setGrantAmount(grant || 0);
  };

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
        onChange={handleChange}
        value={value}
      />
      <SfinePrint>
        Below, see the calculation that establishes the total grant amount requested (75% of eligible costs up to a max.
        of $7,500)
      </SfinePrint>
    </Sdiv>
  );
};

export default Cost;
