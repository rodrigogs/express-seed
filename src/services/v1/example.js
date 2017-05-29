const debug = require('debug')('app:services:v1:index');

const ExampleService = {

  example: () => {
    debug('executing example method');

    return Promise.resolve('example');
  },

};

module.exports = ExampleService;
