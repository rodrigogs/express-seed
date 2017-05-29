const debug = require('debug')('app:config:promise');
const Promise = require('bluebird');

debug('configuring global Promise');

Promise.config({
  warnings: {
    wForgottenReturn: false,
  },
});

global.Promise = Promise;
