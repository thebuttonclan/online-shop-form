const express = require('express');

const router = express.Router();
const application = require('./application');

router.use('/application', application);

router.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

router.use((err, req, res) => {
  res.status(err.status || 500);
  res.json({
    message: err.message,
    error: router.get('env') === 'development' ? err : {},
  });
});

module.exports = router;
