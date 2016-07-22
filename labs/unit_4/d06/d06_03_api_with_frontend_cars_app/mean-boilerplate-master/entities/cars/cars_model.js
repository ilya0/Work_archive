var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carSchema = new Schema({
  carname: String,
  make: String,
  model: String,

});


var Car = mongoose.model('Car', carSchema);

module.exports = Car;
