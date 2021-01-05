const JsonRouter = require('express-json-router');

const router = new JsonRouter();

router.post('/', async req => {
  const {
    body: { form_version, form_data },
  } = req;

  const application = await req.pgQuery.createApplication({ form_version, form_data });

  return application;
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
