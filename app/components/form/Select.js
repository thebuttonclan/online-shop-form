import Form from 'react-bootstrap/Form';
import SemanticStyleLabel from 'components/form/SemanticStyleLabel';

const NamedSelect = props => {
  const { name, title } = props.schema;
  const { value, onChange, required } = props;
  return (
    <Form.Group contollId={`id_${name}`}>
      <SemanticStyleLabel required={required}>{title}</SemanticStyleLabel>
      <Form.Control
        as="select"
        required={required}
        name={name}
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value || ''}
      >
        {props.schema.enum.map(title => (
          <option value={title} key={title}>
            {title}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default NamedSelect;
