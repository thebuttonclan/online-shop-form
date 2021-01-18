import { Form, Input } from 'semantic-ui-react';
import Label from 'components/form/SemanticStyleLabel';

const NamedInput = props => {
  const { name, title, inputType, pattern, minLength, maxLength } = props.schema;
  const { value, onChange, required } = props;
  return (
    <>
      <Label required={required}>{title}</Label>
      <Form.Input
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        // Providing id automatically associates label
        id={`id_${name}`}
        name={name}
        type={inputType}
        control={Input}
        onChange={e => onChange(e.target.value)}
        value={value || ''}
      />
    </>
  );
};

export default NamedInput;
