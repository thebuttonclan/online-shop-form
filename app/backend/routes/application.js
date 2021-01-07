const JsonRouter = require('express-json-router');

const router = new JsonRouter();

router.post('/submit', async (req, res) => {
  const {
    body: { form_version, form_data, js },
  } = req;

  // Match up data formats for js vs no js
  const uploadedData = js ? form_data : req.body;
  delete uploadedData.title;

  console.log(`uploaded ${JSON.stringify(uploadedData)} to backend`);
  const completeData = { ...req.session.form_data, ...uploadedData };
  console.log(`complete data is ${JSON.stringify(completeData)}`);

  // TODO: Validate data and save to db/send error based on result
  res.redirect('/application/submit');
});

router.post('/:page', async (req, res) => {
  const { page } = req.params;

  // const application = await req.pgQuery.createApplication({ form_version, form_data });

  // Save current form progress into session
  req.session.form_data = { ...req.session.form_data, ...req.body };

  // Redirect to the correct page based on where user posted from
  if (page === 'second') res.redirect(`/application/second`);
  else res.status(422).json({ error: 'failed' });
});

router.put('/:id', async req => {
  const {
    params: { id },
    body: { form_version, form_data },
  } = req;

  const application = await req.pgQuery.updateApplication({ id, form_version, form_data });

  return application;
});

module.exports = router.original;
