const validate = data => {
  return true;
};

const saveForm = async (form_data, req, res) => {
  const valid = validate(form_data);
  if (!valid) {
    res.status(422).json(false);
    return false;
  }

  const application = await req.pgQuery.createApplication({ form_data });
  if (!application) {
    res.status(500).json(false);
    return false;
  }

  return true;
};

module.exports = { saveForm };
