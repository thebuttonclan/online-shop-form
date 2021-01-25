const DB_ERROR_MSG = 'db error';
const INVALID_APPLICATION_MSG = 'invalid';
const SUCCESSFUL_APPLICATION_MSG = 'submitted';

function formatLogs(tokens, req, res) {
  if (res.log) return res.log + ` ${tokens['response-time'](req, res)} ms`;
  return [
    tokens.method(req, res),
    tokens.url(req, res),
    tokens.status(req, res),
    tokens.res(req, res, 'content-length'),
    '-',
    tokens['response-time'](req, res),
    'ms',
  ].join(' ');
}

module.exports = { formatLogs, DB_ERROR_MSG, INVALID_APPLICATION_MSG, SUCCESSFUL_APPLICATION_MSG };
