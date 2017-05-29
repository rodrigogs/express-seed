const debug = require('debug')('app:routes:v1:example');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const ExampleController = require('../../controllers/v1/example');

router.route('/')
  .get(ExampleController.index);

module.exports = router;
