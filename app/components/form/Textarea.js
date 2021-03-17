import { Form, TextArea } from 'semantic-ui-react';
import Label from 'components/form/SemanticStyleLabel';

const NamedInput = props => {
  const { name, title, inputType, pattern, minLength, maxLength, subTitle } = props.schema;
  const { value, onChange, required } = props;
  return (
    <>
      {title && <Label required={required}>{title}</Label>}
      {subTitle}
      <Form.TextArea
        required={required}
        pattern={pattern}
        minLength={minLength}
        maxLength={maxLength}
        // Providing id automatically associates label
        id={`id_${name}`}
        name={name}
        type={inputType}
        control={TextArea}
        onChange={e => onChange(e.target.value)}
        value={value || ''}
      />
    </>
  );
};

export default NamedInput;
