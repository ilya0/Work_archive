var Car = require('./cars_model');
var jsend = require('../../extras/jsend');
var controller = {};

controller.index = function(req, res, next) {
  Car.find({}, function(err, cars) {
    if (err) throw err;
    res.json(jsend.success(cars));
  });
};

controller.create = function(req, res, next) {
  var body = req.body;

  var car = new Car();

  car.carname = body.carname;
  car.make = body.make;
  car.model = body.model;

  car.save(function(err) {
    if (err) throw err;
    res.json(jsend.success(car));
  });
};

controller.show = function(req, res, next) {
  var id = req.params.id;

  Car.findById(id, function(err, car) {
    if (err) throw err;
    res.json(jsend.success(car));
  });
};

controller.update = function(req, res, next) {
  var id = req.params.id;
  var body = req.body;

  Car.findById(id, function(err, car) {
    if (err) throw err;

    // update car fields here
    // i.e.
    // car.carnname = body.carname;

    car.save(function(err) {
      if (err) throw err;
      res.json(jsend.success(car));
    });
  });
};

controller.destroy = function(req, res, next) {
  var id = req.params.id;

  Car.findByIdAndRemove(id, function(err) {
    if (err) throw err;
    res.json(jsend.success(null));
  });
};

module.exports = controller;
