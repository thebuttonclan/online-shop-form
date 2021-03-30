import { LAST_PAGE, submitApplication, pageForward } from 'services/application';
import schemasArray from 'schemas/page-schemas';
import { removePageFields, matchPostBody } from 'utils/form-helpers';
import sendConfirmationEmail from 'services/mailer/mailer';

async function handler(req, res) {
  const { body: postData, session = {}, query = {} } = req;
  const { formData = {} } = session;
  let { page, js } = query;

  page = Number(page);
  js = js === 'true';

  const currentPageSchema = schemasArray[page - 1];
  const clearedFormData = removePageFields(formData, currentPageSchema);

  // Clean up newly posted data
  const clearedPostData = matchPostBody(postData, currentPageSchema);
  const newFormData = { ...clearedFormData, ...clearedPostData };
  session.formData = newFormData;

  const context = { req, newData: newFormData, page, js };
  if (page === LAST_PAGE) {
    const success = await submitApplication(context);
    if (success !== undefined) {
      const [result, res, userEmail] = success;
      if (result.isValid) {
        await sendConfirmationEmail(userEmail);
        return res.json(result);
      }
    }
  } else {
    pageForward(context);
  }

  res.end();
}

export default handler;
