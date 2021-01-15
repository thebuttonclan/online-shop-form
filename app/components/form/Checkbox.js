import Form from 'react-bootstrap/Form';
import SemanticStyleLabel from 'components/form/SemanticStyleLabel';
import styled from 'styled-components';

const Row = styled.div`
  display: flex;
  align-items: center;
`;

const StyledLabel = styled(SemanticStyleLabel)`
  margin-left: 2px !important;
`;

const NamedCheckbox = props => {
  const { name, title } = props.schema;
  const { onChange, required, value } = props;

  return (
    <Row>
      <input
        type="checkbox"
        required={required}
        name={name}
        id={`id_${name}`}
        checked={value === true}
        onChange={e => {
          onChange(!value);
        }}
        value={true}
      />
      <StyledLabel required={required} htmlFor={`id_${name}`}>
        {title}
      </StyledLabel>
    </Row>
  );
};

export default NamedCheckbox;
