import _ from 'lodash';

function getFieldsForSchema(schema) {
  try {
    return Object.keys(schema.properties);
  } catch (e) {
    console.error(e);
    return [];
  }
}

/* Non-js users will post 'true' or 'false' string
    rjsf will post true or false bool,
    Match rjsf format and ignore other values */
function getBooleanValue(value) {
  let newValue;
  if (value === 'false') {
    newValue = false;
  }
  if (value === 'true') {
    newValue = true;
  } else if (value === true || value === false) {
    newValue = value;
  }
  return newValue;
}

const getArrayValue = value => (Array.isArray(value) ? value : [value]);

// Clears fields for page before saving new values
export function removePageFields(formData, schema) {
  const fields = getFieldsForSchema(schema);
  return _.omit(formData, fields);
}

// Match body format to rjsf format for non-js cases
export function matchPostBody(postData, schema) {
  const formattedData = { ...postData };
  const { properties } = schema;
  const dataArray = Object.keys(formattedData);

  dataArray.forEach(propertyName => {
    let newValue = formattedData[propertyName];
    // Remove any posted values not on the full-schema
    if (!properties[propertyName]) {
      if (propertyName === 'formVersion') return;
      delete formattedData.propertyName;
      return;
    }
    if (properties[propertyName].type === 'boolean') {
      newValue = getBooleanValue(newValue);
    }
    if (properties[propertyName].type === 'array') {
      newValue = getArrayValue(newValue);
    }
    // TODO: add support for cleaning other rjsf types below, e.g number
    formattedData[propertyName] = newValue;
  });
  return formattedData;
}
