import React from 'react';
import styled from 'styled-components';

const CheckboxContainer = styled.span`
  display: flex;
  align-items: top;
  margin: 10px;
`;

const CheckboxLabel = styled.label`
  margin-left: 10px;
`;

export default function CheckboxWidget(props) {
  const {
    schema,
    id,
    value,
    disabled,
    readonly,
    label,
    autofocus,
    onBlur,
    onFocus,
    onChange,
    DescriptionField,
    registry,
  } = props;

  const { name } = schema;

  const required = registry.rootSchema.required?.includes(name);

  return (
    <div className={`checkbox ${disabled || readonly ? 'disabled' : ''}`}>
      {schema.description && <DescriptionField description={schema.description} />}
      <CheckboxContainer>
        <input
          type="checkbox"
          id={id}
          name={name}
          checked={typeof value === 'undefined' ? false : value}
          required={required}
          disabled={disabled || readonly}
          autoFocus={autofocus}
          onChange={event => onChange(event.target.checked)}
          onBlur={onBlur && (event => onBlur(id, event.target.checked))}
          onFocus={onFocus && (event => onFocus(id, event.target.checked))}
        />
        <CheckboxLabel htmlFor={id}>{label}</CheckboxLabel>
      </CheckboxContainer>
    </div>
  );
}
