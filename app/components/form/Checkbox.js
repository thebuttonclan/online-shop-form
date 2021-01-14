import Form from 'react-bootstrap/Form';
import SemanticStyleLabel from 'components/form/SemanticStyleLabel';

const NamedCheckbox = props => {
  const { name, title } = props.schema;
  const { value, onChange, required } = props;
  return (
    <Form.Group contollId={`id_${name}`}>
      <SemanticStyleLabel required={required}>{title}</SemanticStyleLabel>
      <Form.Control
        as="checkbox"
        required={required}
        name={name}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value || ''}
      />
    </Form.Group>
  );
};

export default NamedCheckbox;
