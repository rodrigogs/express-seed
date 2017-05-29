const debug = require('debug')('app:config');

debug('loading app configuration');

require('./promise');

module.exports = {
  env: require('./env'),
  logger: require('./logger'),
};
