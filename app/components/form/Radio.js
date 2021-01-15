// See https://github.com/rjsf-team/react-jsonschema-form/blob/master/packages/core/src/components/widgets/RadioWidget.js
// Code re-used with small change to pass name down to checkboxes for the non-js case

import styled from 'styled-components';
import { MIN_PADDING, LARGE_FONT } from 'theme';

const SemanticLabel = styled.span`
  padding-left: ${MIN_PADDING};
  font-weight: bold;
`;

const GroupTitle = styled.p`
  font-size: ${LARGE_FONT};
`;

function RadioWidget(props) {
  console.log(props);

  const { options, value, required, disabled, readonly, autofocus, onBlur, onFocus, onChange, id } = props;
  // Generating a unique field name to identify this set of radio buttons
  const { name, title } = props.schema;
  const { enumOptions, enumDisabled, inline } = options;
  // checked={checked} has been moved above name={name}, As mentioned in #349;
  // this is a temporary fix for radio button rendering bug in React, facebook/react#7630.
  return (
    <div className="field-radio-group" id={id}>
      <GroupTitle>{title}</GroupTitle>
      {enumOptions.map((option, i) => {
        const checked = option.value === value;
        const itemDisabled = enumDisabled && enumDisabled.indexOf(option.value) !== -1;
        const disabledCls = disabled || itemDisabled || readonly ? 'disabled' : '';
        const radio = (
          <span>
            <input
              type="radio"
              checked={checked}
              name={name}
              required={required}
              value={option.value}
              disabled={disabled || itemDisabled || readonly}
              autoFocus={autofocus && i === 0}
              onChange={_ => onChange(option.value)}
              onBlur={onBlur && (event => onBlur(id, event.target.value))}
              onFocus={onFocus && (event => onFocus(id, event.target.value))}
            />
            <SemanticLabel>{option.label}</SemanticLabel>
          </span>
        );

        return inline ? (
          <label key={i} className={`radio-inline ${disabledCls}`}>
            {radio}
          </label>
        ) : (
          <div key={i} className={`radio ${disabledCls}`}>
            <label>{radio}</label>
          </div>
        );
      })}
    </div>
  );
}

export default RadioWidget;
