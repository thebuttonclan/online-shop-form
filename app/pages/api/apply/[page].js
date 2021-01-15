import { LAST_PAGE, submitApplication, pageForward } from 'services/application';
import schemasArray from 'schemas/page-schemas';
import fullSchema from 'schemas/consolidated-schema';
import { removePageFields, matchPostBody } from 'utils/form-helpers';

async function handler(req, res) {
  const { body: postData, session = {}, query = {} } = req;
  const { formData = {} } = session;
  let { page, js } = query;

  page = Number(page);
  js = js === 'true';

  const currentPageSchema = schemasArray[page - 1];
  const clearedFormData = removePageFields(currentPageSchema, formData);

  // Clean up newly posted data
  const newData = matchPostBody(postData, fullSchema.properties);
  const allData = { ...clearedFormData, ...newData };
  session.formData = allData;
  console.log('Cleaned newData is: ', allData);

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
