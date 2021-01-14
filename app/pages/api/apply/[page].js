import { LAST_PAGE, submitApplication, pageForward } from 'services/application';

async function handler(req, res) {
  const { body: postData, session = {}, query = {} } = req;
  const { formData = {} } = session;
  let { page, js } = query;

  page = Number(page);
  js = js === 'true';

  // Update session data
  const newData = { ...formData, ...postData };
  session.formData = newData;

  const context = { req, newData, page, js };

  if (page === LAST_PAGE) {
    await submitApplication(context);
    session.formData = {};
  } else {
    pageForward(context);
  }

  res.end();
}

export default handler;
