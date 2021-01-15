import { Form } from 'semantic-ui-react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-between;
`;

const NamedRadio = props => {
  const { name, title } = props.schema;
  const { value, onChange } = props;
  return (
    <div>
      <Form.Field>{title}</Form.Field>
      <FlexContainer>
        <Form.Field>
          <label htmlFor={`${name}_true`}>Yes</label>
          <input
            name={`${name}`}
            type="radio"
            value={true}
            id={`${name}_true`}
            checked={value === true}
            onChange={e => {
              onChange(true);
            }}
            required={true}
          />
        </Form.Field>
        <Form.Field>
          <label htmlFor={`${name}_false`}>No</label>
          <input
            label="No"
            type="radio"
            name={`${name}`}
            id={`${name}_false`}
            value={false}
            checked={value === false}
            onChange={e => {
              onChange(false);
            }}
            required={true}
          />
        </Form.Field>
      </FlexContainer>
    </div>
  );
};

export default NamedRadio;
