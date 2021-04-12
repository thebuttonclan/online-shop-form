import { validateFormData } from 'services/application';
import { sendEmail } from 'services/mailer';
import { DB_ERROR_MSG, INVALID_APPLICATION_MSG, SUCCESSFUL_APPLICATION_MSG, SAVING_ERROR_MSG } from 'utils/logging';

const { version: formVersion } = require('../package.json');

export async function submitApplication({ req, newData, js }) {
  const { res, pgQuery } = req;
  try {
    const result = validateFormData(newData);

    if (!result.isValid) {
      res.log = `${INVALID_APPLICATION_MSG}, data: ${JSON.stringify(newData)}, errors: ${JSON.stringify(
        result.errors
      )}`;
      if (js) return res.status(422).json(result);
      return res.redirect('/message/validation-error');
    }

    const success = await pgQuery.createApplication({ form_data: { ...newData, formVersion } });
    if (!success) {
      res.log = `${DB_ERROR_MSG}, data: ${JSON.stringify(newData)}`;
      throw new Error('Failed to save application');
    }

    const count = await pgQuery.countApplication();
    req.backendState.setApplicationCount(count);
    res.log = `${SUCCESSFUL_APPLICATION_MSG}: ${count}`;

    // intentionally not waiting for the email sent to unblock the response
    // keep this commented until the SMTP server issues are resolved
    // sendEmail({
    //   subject: 'Launch Online - Application Received',
    //   to: req.session.formData.email,
    //   template: 'confirmation',
    //   context: {
    //     phoneNum: '844-487-1266',
    //     siteUrl: 'https://launchonline.ca',
    //   },
    // });

    req.session.formData = {};

    if (js) return res.json(result);
    return res.redirect('/message/success');
  } catch (error) {
    res.log = `${SAVING_ERROR_MSG}: ${error}`;
    if (js) return res.status(422).json({ hasError: true, message: error.message || error });
    return res.redirect('/message/error');
  }
}

export function pageForward({ req, newData, page, js }) {
  const { res } = req;

  const nextPage = page + 1;
  const props = { page: nextPage, formData: newData };

  if (js) {
    res.json(props);
  } else {
    res.redirect(`/apply/${nextPage}`);
  }
}
