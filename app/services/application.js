import axios from 'axios';

const validate = data => {
  return true;
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
  return { props };
};

module.exports = { createApplication, updateApplication, submitApplication, pageForward };
