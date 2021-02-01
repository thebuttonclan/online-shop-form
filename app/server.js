const next = require('next');

const initExpresss = require('./backend/express-server');
const createServer = require('./backend/create-server');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const domains = ['launchonline.ca', 'dev.launchonline.ca', 'test.launchonline.ca'];

app.prepare().then(async () => {
  const expressServer = await initExpresss();

  // catch all other routes and return the index file
  expressServer.all('*', async (req, res) => handle(req, res));

  createServer(expressServer);
});
