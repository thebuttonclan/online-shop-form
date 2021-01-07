const JsonRouter = require('express-json-router');

const router = new JsonRouter();

// Unused example route for now
router.put('/:id', async req => {
  const {
    params: { id },
    body: { form_version, form_data },
  } = req;

  const application = await req.pgQuery.updateApplication({ id, form_version, form_data });

  return application;
});

module.exports = router.original;
