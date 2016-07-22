var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var housesRouter = require('./routes/houses.js');
var bodyParser = require('body-parser');
//helps get data from a post and use the data by disectiong


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
//modifiies the request body, to have the post data



app.use(function(req,res,next){
  console.log('Time:',Date.now());
  next();
});
//consoles time then sends it to the next


app.get('/', function(req,res){
  res.json({message: 'hello world'});
});


app.use(function(req,res,next){
  console.log('Request Type:',req.method);
  next();
});



app.use('/api/houses',housesRouter);
//name spacing to shorten the name



app.listen(port, function(){
  console.log('Listening on port: ', port);

});
