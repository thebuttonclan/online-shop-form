const next = require('next');

const initExpresss = require('./backend/express-server');
const createServer = require('./backend/create-server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const domains = ['launchonline.ca', 'dev.launchonline.ca', 'test.launchonline.ca'];

app.prepare().then(async () => {
  const expressServer = await initExpresss();

  expressServer.use((req, res, next) => {
    let hostname = req.hostname;

    domains.forEach(domain => {
      if (req.hostname === `www.${domain}`) {
        hostname = domain;
      } else if (req.hostname === domain) hostname = domain;
    });

    if (req.headers['x-forwarded-proto'] === 'http') {
      res.redirect(301, `https://${hostname}${req.url}`);
      return;
    }

    next();
  });

  // catch all other routes and return the index file
  expressServer.all('*', async (req, res) => handle(req, res));

  createServer(expressServer);
});
