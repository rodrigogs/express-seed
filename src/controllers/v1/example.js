const debug = require('debug')('app:controllers:v1:index');

const ExampleService = require('../../services/v1/example');

const ExampleController = {

  index: async (req, res, next) => {
    debug('executing index action');

    try {
      const example = await ExampleService.example();
      res.status(200).send(example);
    } catch (err) {
      next(err);
    }
  },

};

module.exports = ExampleController;
