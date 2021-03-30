import hbs from 'nodemailer-express-handlebars';
import nodemailer from 'nodemailer';

const host = process.env.SMTP_HOST || '';
const port = (process.env.SMTP_PORT && parseInt(process.env.SMTP_PORT, 10)) || 587;
const secure = process.env.SMTP_SECURE === 'true';
const user = process.env.SMTP_USERNAME || '';
const pass = process.env.SMPT_PASSWORD || '';

const transport = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // true for 465, false for other ports
  auth: {
    user,
    pass,
  },
});

const viewOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: './services/mailer/partials',
    defaultLayout: false,
  },
  viewPath: './services/mailer/views',
  extName: '.handlebars',
};

transport.use('compile', hbs(viewOptions));

const getMailOptions = ({ subject, to, template, context }) => {
  return {
    from: '<applications@launchonline.ca>',
    to,
    subject,
    template,
    context,
    attachments: [
      {
        filename: 'lobluelogo.png',
        path: './public/icons/lobluelogo.png',
        cid: 'logo',
      },
    ],
  };
};

export async function sendEmail({ subject, to, template, context }) {
  const options = getMailOptions({ subject, to, template, context });

  try {
    return await transport.sendMail(options);
  } catch (err) {
    console.log(err);
    return null;
  }
}

export default { sendEmail };
