var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var logger = require('morgan'); //standard way to include a node in your program
var request = require('request');



var options = {
  url: 'https://api.github.com/teams/1846681/members?access_token=c0c1ac28cf2e7139498397e301c004b4ae6bfc0e',
  headers: {
    'User-Agent': 'node.js'
  }
};

app.use(function(req,res,next){
  console.log(req.method + " request to" +req.path + "from"  +req.ip);
  next();
});
/// app.use is middleware  logging the req
/// req is a object that you can run methods on

app.use(logger('dev')); //logs the


app.get('/',function(req,res){
request(options, function(err,response,body){
 res.send(body);

  });
});

app.get('/users/:id',function(req,res){
  console.log("im in side this route");
 res.json({message:'hello'});


});






app.listen(port,function(){
  console.log('Listening on port: ',port);
});
