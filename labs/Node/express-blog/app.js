          var express = require('express');
//first  add express
var app = express();
// making the app an instance of express
var postRouter = require('./routes/posts');
var port = process.env.PORT || 3000;
//setting the port



app.use('/posts', postRouter);

// app.get('/', function(req,res){
//   res.send('<h1> Root RHOUTE </h1><p> </p>');
// });
// app.get('/hello', function(req,res){
//   res.send('<h1> Hello Route </h1><p> </p>');
// });
// app.get('/goodbye', function(req,res){
//   res.send('<h1> Goodbye route </h1><p> </p>');
// });

// app.get(/.*fly*/, function(req, res) {
//   res.send('/.*fly*/');
// });

app.listen(port, function(){
  console.log('magic is happeeing on port '+ port);
});
