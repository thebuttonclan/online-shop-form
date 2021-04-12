const path = require('path');
const nodemailer = require('nodemailer');

const envPath = path.resolve(process.cwd(), '..', '.env.local');
require('dotenv').config({ path: envPath });

const host = process.env.SMTP_HOST || '';
const port = (process.env.SMTP_PORT && parseInt(process.env.SMTP_PORT, 10)) || 587;
const secure = process.env.SMTP_SECURE === 'true';
const user = process.env.SMTP_USER || '';
const pass = process.env.SMTP_PASSWORD || '';

const transport = nodemailer.createTransport({
  host,
  port,
  secure: port === 465, // true for 465, false for other ports
  auth: {
    user,
    pass,
  },
});

transport
  .sendMail({
    from: 'applications@launchonline.ca', // sender address
    to: 'junmin@button.is', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>', // html body
  })
  .then(console.log, console.error);
