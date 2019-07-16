const express = require('express');

const router = express.Router();

const service = require('./service');

router.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Method', 'GET,POST,PUT,DELETE,OPTIONS');
  next();
});

router.get('/getLunbotu', service.getLunbotu);
module.exports = router;
