import { Form, Input } from 'semantic-ui-react';
import styled from 'styled-components';
import StyledP from 'components/StyledP';

const Sdiv = styled.div`
  margin-bottom: 30px;
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
      <StyledP bold>Total Amount</StyledP>
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
      <StyledP size="0.75em" color="#313132" opacity="0.75">
        Below, see the calculation that establishes the total grant amount requested (75% of eligible costs up to a max.
        of $7,500)
      </StyledP>
    </Sdiv>
  );
};

export default Cost;
