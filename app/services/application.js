import axios from 'axios';
import validate from 'react-jsonschema-form/lib/validate';
import schema1 from 'schemas/page-1';
import schema2 from 'schemas/page-2';
import fullSchema from 'schemas/full-schema';
import { firstUiSchema, secondUiSchema } from 'formConfig/jsonSchema';

const getSchema = page => {
  if (page === 1) return schema1;
  if (page === 2) return schema2;
  // TODO: decide on invalid page handling
  return fullSchema;
};

const getUISchema = page => {
  if (page === 1) return firstUiSchema;
  if (page === 2) return secondUiSchema;
  return firstUiSchema;
};

const validateFormData = (formData, page) => {
  const schema = getSchema(page);

  return validate(formData, schema);
};

async function createApplication(data) {
  try {
    const appliedSuccessfully = await axios.post('/api/application/submit/js', data).then(res => res.data);
    return appliedSuccessfully;
  } catch (error) {
    console.error(error);
    return null;
  }
}

async function updateApplication(formData, page) {
  try {
    const data = await axios.post(`/apply/${page}?js=true`, formData).then(res => res.data);
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
}

const handleError = (js, res) => {
  if (js) return res.status(422).json(false);
  res.status(422).redirect('/apply/error');
  return res.end();
};

const submitApplication = async (res, js, pgQuery, newData) => {
  const valid = validate(newData);
  if (!valid) handleError(js, res);
  const savedSuccessfully = await pgQuery.createApplication({ form_data: newData });
  if (!savedSuccessfully) handleError(js, res);

  if (js) res.status(200).json(true);
  else res.status(200).redirect('success');
  res.end();
};

const pageForward = (page, newData, res, js) => {
  const nextPage = page + 1;
  const props = { page: nextPage, formData: newData };

  if (js) {
    res.json(props);
  } else {
    res.redirect(`/apply/${nextPage}`);
  }
  res.end();
};

module.exports = {
  getSchema,
  getUISchema,
  validateFormData,
  createApplication,
  updateApplication,
  submitApplication,
  pageForward,
};
