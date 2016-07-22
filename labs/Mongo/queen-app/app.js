var express = require('express');
var app = express();



//middleware
var logger =require('morgan');
var bodyParser = require('body-parser');


//use middleware

app.use(logger('dev'));
app.use(bodyParser.json()); //use bodyparser
app.use(bodyParser.urlencoded({extended:false}));  //bodyparser use file


var db = require('./db');
var userRoutes = require('./routes/user'); //requiring the user file
app.use('/users',userRoutes);// namespacing



// //create the new user var
// var User = require('./models/user');


// //create new user
// var freddie = new User({
//   firstName: 'Freddie',
//   email: 'freddie@queen.uk',
//   meta:{
//     age:45
//   }
// });

// freddie.sayHello();

var port = process.env.PORT || 3000;
app.listen(port,function(){
  console.log("port is running on : " + port);
});


