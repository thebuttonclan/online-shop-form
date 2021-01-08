import { Form, Select, Label } from 'semantic-ui-react';

const NamedSelect = props => {
  const { name, title } = props.schema;
  const { value, onChange, required } = props;
  const options = props.schema.enum.map(title => ({
    key: title,
    text: title,
    value: title,
  }));
  return (
    <>
      <noscript>
        <label htmlFor={`id_${name}`}>
          {title}
          <select
            name={name}
            id={`id_${name}`}
            required={required}
            onChange={e => onChange(e.target.value)}
            value={value}
          >
            {options.map(option => (
              <option value={option.value} key={option.key}>
                {option.text}
              </option>
            ))}
          </select>
        </label>
      </noscript>

      {/* Works with js, but uses aria and divs so breaks without js */}
      {typeof window === 'object' && (
        <Form.Select
          label={title}
          required={required}
          name={name}
          options={options}
          onChange={(e, { value }) => {
            onChange(value);
          }}
          value={value || ''}
        />
      )}
    </>
  );
};

export default NamedSelect;
