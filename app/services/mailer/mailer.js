const hbs = require('nodemailer-express-handlebars');
import { SMTPTransport, ViewOptions, mailOptions } from './config';

async function sendConfirmationEmail(toEmail) {
  SMTPTransport.use('compile', hbs(ViewOptions));

  await SMTPTransport.sendMail(mailOptions(toEmail), (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent: ' + info);
    }
  });
}

module.exports = sendConfirmationEmail;
