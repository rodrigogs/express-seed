const debug = require('debug')('app:controllers:v1:index');

const ExampleService = require('../../services/v1/example');

const ExampleController = {

  index: async (req, res) => {
    debug('executing index action');

    const example = await ExampleService.example();
    res.status(200).send(example);
  },

};

module.exports = ExampleController;
