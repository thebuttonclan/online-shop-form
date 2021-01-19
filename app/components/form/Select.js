import Form from 'react-bootstrap/Form';
import SemanticStyleLabel from 'components/form/SemanticStyleLabel';

const NamedSelect = props => {
  const { value, onChange, required, schema } = props;
  const { name, title } = schema;
  const enumItems = schema.enum || ['', ...schema.items.enum];

  return (
    <Form.Group contollId={`id_${name}`}>
      <SemanticStyleLabel required={required}>{title}</SemanticStyleLabel>
      <Form.Control
        as="select"
        required={required}
        name={name}
        defaultValue=""
        onChange={e => {
          onChange(e.target.value);
        }}
        value={value || ''}
      >
        {enumItems.map(title => (
          <option value={title} key={title}>
            {title}
          </option>
        ))}
      </Form.Control>
    </Form.Group>
  );
};

export default NamedSelect;
