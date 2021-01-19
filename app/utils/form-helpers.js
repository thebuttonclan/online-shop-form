import _ from 'lodash';
import { getNestedFieldPropertiesByName } from 'schemas/split-schema';

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
  const nestedFields = getNestedFieldPropertiesByName(schema);

  dataArray.forEach(propertyName => {
    let newValue = formattedData[propertyName];
    const objectIndex = nestedFields.findIndex(field => {
      const ownedPropertyNames = Object.values(field)[0];
      return ownedPropertyNames.includes(propertyName);
    });

    // Remove any posted values not on the full-schema
    if (!properties[propertyName] && objectIndex === -1) {
      delete formattedData.propertyName;
      return;
    }

    if (properties[propertyName]?.type === 'boolean') {
      newValue = getBooleanValue(newValue);
      formattedData[propertyName] = newValue;
    }

    if (properties[propertyName]?.type === 'array') {
      newValue = getArrayValue(newValue);
      formattedData[propertyName] = newValue;
    }

    // If fieldname is part of an object
    if (objectIndex !== -1) {
      const owningPropertyName = Object.keys(nestedFields[objectIndex])[0];

      // Handle boolean for nested fields
      if (properties[owningPropertyName].properties[propertyName].type === 'boolean') {
        newValue = getBooleanValue(newValue);
      }

      if (!formattedData[owningPropertyName]) {
        formattedData[owningPropertyName] = {};
        formattedData[owningPropertyName][propertyName] = newValue;
      } else {
        formattedData[owningPropertyName][propertyName] = newValue;
      }
    }
    // TODO: add support for cleaning other rjsf types below, e.g number
    // TODO: stop JS from double posting. currently nested fields are left in the base
    // even after we add them to the parent. delete isn't working on them.
  });
  return formattedData;
}
