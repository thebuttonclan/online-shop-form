import axios from 'axios';
import validate from 'react-jsonschema-form/lib/validate';
import createValidator from 'schemas/custom-validate';
import fullSchema from 'schemas/consolidated-schema';
import { getPropertyDependencies } from 'schemas/split-schema';

export const LAST_PAGE =
  Object.keys(fullSchema.properties).length - getPropertyDependencies(fullSchema.dependencies).length;
export const PAGES = Array.from({ length: LAST_PAGE }, (_, i) => i + 1);

// see https://github.com/rjsf-team/react-jsonschema-form/blob/6f3c4c78765cbae67b91bf7762094c9b7e38c7d1/packages/core/src/validate.js#L167
export function validateFormData(formData) {
  const validated = validate(formData, fullSchema, createValidator(-1));

  const { errors } = validated;

  return errors.length === 0 ? { isValidated: true, isValid: true } : { isValidated: true, isValid: false, errors };
}

export async function saveApplication(formData, page) {
  const data = await axios.post(`/api/apply/${page}?js=true`, formData).then(
    res => res.data,
    err => err.response.data
  );

  return data;
}
