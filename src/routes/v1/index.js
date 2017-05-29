const debug = require('debug')('app:routes:v1');
const express = require('express');

debug('configuring routes');

const router = express.Router();

const example = require('./example');

router.use('/example', example);

module.exports = router;
