var express = require('express');
var port = process.env.PORT || 3000;

var app = express();
var housesRouter = require('./routes/homes.js');

app.use('/api/homes',housesRouter); //name spacing




app.listen(port, function(){
  console.log('Listening on port: ', port);

});









