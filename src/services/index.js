const debug = require('debug')('app:services:index');

const IndexService = {

  example: () => {
    debug('executing example method');

    return Promise.resolve('example');
  },

};

module.exports = IndexService;
