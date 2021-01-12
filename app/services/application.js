import axios from 'axios';
import validate from 'react-jsonschema-form/lib/validate';
import schema1 from 'schemas/page-1';
import schema2 from 'schemas/page-2';
import fullSchema from 'schemas/full-schema';

export const LAST_PAGE = 2;
export const PAGES = Array.from({ length: LAST_PAGE }, (_, i) => i + 1);

export function getSchema(page) {
  if (page === 1) return schema1;
  if (page === 2) return schema2;
  // TODO: decide on invalid page handling
  return fullSchema;
}

export function validateFormData(formData) {
  const validated = validate(formData, fullSchema);
  const { errors } = validated;
  return errors.length === 0;
}

export async function saveApplication(formData, page) {
  try {
    const data = await axios.post(`/api/apply/${page}?js=true`, formData).then(res => res.data);
    return data;
  } catch (error) {
    console.error(error);
    return { page: 'message/error' };
  }
}

export function handleError(js, res) {
  if (js) return res.status(422).json(false);
  res.status(422).redirect('/apply/messages/error');
  return res.end();
}

export async function submitApplication({ req, newData, js }) {
  const { res, pgQuery } = req;

  const valid = validateFormData(newData);

  if (!valid) handleError(js, res);
  const savedSuccessfully = await pgQuery.createApplication({ form_data: newData });
  if (!savedSuccessfully) handleError(js, res);

  if (js) res.status(200).json(true);
  else res.status(200).redirect('success');
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
