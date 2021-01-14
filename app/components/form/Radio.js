import { Form, Radio, Input } from 'semantic-ui-react';
import styled from 'styled-components';

const FlexContainer = styled.div`
  display: flex;
`;

const StyledRadio = styled(Radio)`
  margin-right: 2em;
`;

const NamedRadio = props => {
  const { name, title } = props.schema;
  const { value, onChange } = props;
  return (
    <div>
      <Form.Field>{title}</Form.Field>
      <FlexContainer>
        <Form.Field>
          <StyledRadio
            label="Yes"
            name={`${name}-radio`}
            value={true}
            checked={value === true}
            onChange={(e, { value }) => {
              onChange(value);
            }}
          />
        </Form.Field>
        <Form.Field>
          <StyledRadio
            label="No"
            name={`${name}-radio`}
            value={false}
            checked={value === false}
            onChange={(e, { value }) => {
              onChange(value);
            }}
          />
        </Form.Field>
      </FlexContainer>
    </div>
  );
};

export default NamedRadio;
