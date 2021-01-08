import { Form, Input } from 'semantic-ui-react';

const NamedInput = props => {
  const { name, title, inputType } = props.schema;
  const { value, onChange, required } = props;
  return (
    <Form.Input
      label={title}
      required={required}
      // Providing id automatically associates label
      id={`id_${name}`}
      name={name}
      type={inputType}
      control={Input}
      onChange={e => onChange(e.target.value)}
      value={value || ''}
    />
  );
};

export default NamedInput;
