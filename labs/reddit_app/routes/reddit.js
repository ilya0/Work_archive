var express = require('express');
//linking the express module
var request = require('request');
// requires request node modules
var router = express.Router();

var score = [];
var numComments = [];
var myImage = [];


// router.get('/', function(req,res){
//   res.json({router: 'reddit router'});
// });//route for reddit


router.get('/', function(req, res) {
    res.send('<img src="' + myImage + '"><br><h1>This post has a score of ' + score + ' and ' + numComments + ' comments.</h1>');
});



request('http://reddit.com/r/funny.json',function(err,res,body){
  if(err){
    throw err;
  }
  //convert JSON to a JS object
  var myResult = JSON.parse(body);

  //drill in to get specific pieces of data
  for(i=0;i<3;i++){

  score = myResult.data.children[i].data.score;
  numComments = myResult.data.children[i].data.num_comments;
  myImage = myResult.data.children[i].data.thumbnail;

  console.log('score ' + score);
  console.log('numComments ' + numComments);
  console.log('myImage: ' + myImage);

}
});



module.exports = router;
