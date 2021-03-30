const nodemailer = require('nodemailer');

module.exports.SMTPTransport = nodemailer.createTransport({
  host: process.env.SMTP_SERVICE_HOST,
  port: process.env.SMTP_SERVICE_PORT,
  secure: process.env.SMTP_SERVICE_SECURE, // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER_NAME,
    pass: process.env.SMTP_USER_PASSWORD,
  },
});

module.exports.ViewOptions = {
  viewEngine: {
    extName: '.handlebars',
    partialsDir: './services/mailer/partials',
    defaultLayout: false,
  },
  viewPath: './services/mailer/views',
  extName: '.handlebars',
};

module.exports.mailOptions = toEmail => {
  return {
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
};
