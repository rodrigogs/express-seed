const debug = require('debug')('app:routes:index');
const express = require('express');

debug('configuring routes');

const ErrorsMiddleware = require('../middlewares/errors');
const IndexController = require('../controllers/index');
const v1 = require('./v1');

const router = express.Router();

// Healthy check
router.get('/', IndexController.index);

// API versions
router.use('/v1', v1);

// catch 404 and forward to error handler
router.use(ErrorsMiddleware.notFound);

// generic error handler
router.use(ErrorsMiddleware.generic);

module.exports = router;
