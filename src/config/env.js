const debug = require('debug')('app:config:env');

debug('loading environment');

const env = name => process.env[name.toUpperCase()];

module.exports = {

  NODE_ENV: env('node_env') || 'development',

  PORT: env('port') || 3000,

  HTTP_LOG_CONFIG: env('http_log_config') || 'dev',

};
