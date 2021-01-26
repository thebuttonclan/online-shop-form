import axios from 'axios';
import validate from 'react-jsonschema-form/lib/validate';
import createValidator from 'schemas/custom-validate';
import fullSchema from 'schemas/consolidated-schema';
import { getPropertyDependencies } from 'schemas/split-schema';

const { version: formVersion } = require('../package.json');

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

export async function submitApplication({ req, newData, js }) {
  const { res, pgQuery } = req;
  try {
    const result = validateFormData(newData);

    if (!result.isValid) {
      if (js) return res.status(422).json(result);
      return res.redirect('/message/validation-error');
    }

    const success = await pgQuery.createApplication({ form_data: { ...newData, formVersion } });
    if (!success) {
      throw new Error('Failed to save application');
    }

    const count = await pgQuery.countApplication();
    req.backendState.setApplicationCount(count);

    req.session.formData = {};

    if (js) return res.json(result);
    return res.redirect('/message/success');
  } catch (error) {
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
