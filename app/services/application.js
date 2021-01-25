import axios from 'axios';
import validate from 'react-jsonschema-form/lib/validate';
import createValidator from 'schemas/custom-validate';
import schema1 from 'schemas/page-1';
import schema2 from 'schemas/page-2';
import fullSchema from 'schemas/consolidated-schema';
import { getPropertyDependencies } from 'schemas/split-schema';
import { DB_ERROR_MSG, INVALID_APPLICATION_MSG, SUCCESSFUL_APPLICATION_MSG, SAVING_ERROR_MSG } from 'utils/logging';

const { version: formVersion } = require('../package.json');

export const LAST_PAGE =
  Object.keys(fullSchema.properties).length - getPropertyDependencies(fullSchema.dependencies).length;
export const PAGES = Array.from({ length: LAST_PAGE }, (_, i) => i + 1);

export function getSchema(page) {
  if (page === 1) return schema1;
  if (page === 2) return schema2;
  // TODO: decide on invalid page handling
  return fullSchema;
}

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

export async function submitApplication({ req, newData, js }) {
  const { res, pgQuery } = req;

  try {
    const result = validateFormData(newData);

    if (!result.isValid) {
      res.log = `${INVALID_APPLICATION_MSG}, data: ${JSON.stringify(newData)}, errors: ${JSON.stringify(
        result.errors
      )}`;
      if (js) return res.status(422).json(result);
      return res.redirect('/message/validation-error');
    }
    const success = await pgQuery.createApplication({ form_data: { ...newData, formVersion } });
    if (!success) {
      res.log = `${DB_ERROR_MSG}, data: ${JSON.stringify(newData)}`;
      throw new Error('Failed to save application');
    }

    const count = await pgQuery.countApplication();
    req.backendState.setApplicationCount(count);
    res.log = `${SUCCESSFUL_APPLICATION_MSG}: ${count}`;

    req.session.formData = {};

    if (js) return res.json(result);
    return res.redirect('/message/success');
  } catch (error) {
    res.log = `${SAVING_ERROR_MSG}: ${error}`;
    if (js) return res.status(422).json({ hasError: true, message: error.message || error });
    return res.redirect('/message/error');
  }
}

export function pageForward({ req, newData, page, js }) {
  const { res } = req;

  const nextPage = page + 1;
  const props = { page: nextPage, formData: newData };

  if (js) {
    res.json(props);
  } else {
    res.redirect(`/apply/${nextPage}`);
  }
}
