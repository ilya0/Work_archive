//mongoose stuff
var mongoose = require('mongoose');
var mongoUrl = process.env.MONGO_URL  || 'mongodb://localhost/queen-app';
mongoose.connect(mongoUrl); //connects mongo to our database

module.exports = mongoose;
