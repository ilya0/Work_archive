var express = require('express');
var router = express.Router();
var carcntrl = require('../entities/cars/cars_controller');

router.route('/')
  .get(carcntrl.index)
  .post(carcntrl.create);

router.route('/:id')
  .get(carcntrl.show)
  .put(carcntrl.update)
  .delete(carcntrl.destroy);

module.exports = router;
