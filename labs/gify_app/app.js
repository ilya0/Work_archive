var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var giphyRoutes = require('./routes/giphy');
var codewarroute = require('./routes/giphy');

app.use('/giphy', giphyRoutes);

app.listen(port, function(){
  console.log('Server listing on port '+port);
});
