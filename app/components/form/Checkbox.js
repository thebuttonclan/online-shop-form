import { Checkbox } from 'semantic-ui-react';

const NamedCheckbox = props => {
  const { name, title } = props.schema;
  const { value, onChange, required } = props;
  return (
    <>
      <noscript>
        <div className="ui checkbox">
          <input
            type="checkbox"
            id={`id_${name}`}
            name={name}
            required={required}
            onChange={() => {
              onChange(!value);
            }}
            checked={value}
          />
          <label htmlFor={`id_${name}`}>{title}</label>
        </div>
      </noscript>

      {
        // Works with js}
      }
      {typeof window === 'object' && (
        <Checkbox
          label={title}
          required={required}
          id={`id_${name}`}
          name={name}
          onChange={() => {
            onChange(!value);
          }}
          checked={value}
        />
      )}
    </>
  );
};

export default NamedCheckbox;
