const JsonRouter = require('express-json-router');
const { saveForm } = require('../helpers/form');

const router = new JsonRouter();

router.post('/submit/js', async (req, res) => {
  const { body: form_data } = req;
  const savedFormSuccessfully = saveForm(form_data, req, res);
  if (savedFormSuccessfully) res.status(200).json(true);
});

router.post('/submit', async (req, res) => {
  const { body } = req;
  const form_data = { ...req.session.form_data, ...body };
  const savedFormSuccessfully = saveForm(form_data, req, res);
  if (savedFormSuccessfully) res.redirect('/application/success');
});

router.post('/:page', async (req, res) => {
  const { page } = req.params;

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
