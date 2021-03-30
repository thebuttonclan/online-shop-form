const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');

async function sendConfirmationEmail(toEmail) {
  // create reusable transporter object
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_SERVICE_HOST,
    port: process.env.SMTP_SERVICE_PORT,
    secure: process.env.SMTP_SERVICE_SECURE, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER_NAME,
      pass: process.env.SMTP_USER_PASSWORD,
    },
  });

  const handlebarOptions = {
    viewEngine: {
      extName: '.handlebars',
      partialsDir: './services/mailer/partials',
      defaultLayout: false,
    },
    viewPath: './services/mailer/views',
    extName: '.handlebars',
  };

  transporter.use('compile', hbs(handlebarOptions));

  //TODO: HTML to text conversion
  const mailOptions = {
    from: '<applications@launchonline.ca>',
    to: toEmail,
    subject: 'Launch Online - Application Received',
    template: 'confirmation',
    context: {
      phoneNum: '844-487-1266',
      siteUrl: 'https://launchonline.ca',
    },
    attachments: [
      {
        filename: 'lobluelogo.png',
        path: './public/icons/lobluelogo.png',
        cid: 'logo',
      },
    ],
  };

  await transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Email sent: ' + info);
    }
  });
}

module.exports = sendConfirmationEmail;
