// app.js
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var welcome = require('./routes/welcome.js');
app.use('/', welcome);


app.listen(port, function() {
    console.log('Listening on port', port)
});



