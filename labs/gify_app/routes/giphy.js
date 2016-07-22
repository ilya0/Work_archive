var express = require('express');
var router = express.Router();
var request = require('request');

router.get('/', function(req,res){
  res.json({message:'much connect!'});
});




router.get('/:query', function(req,res){
  var searchString = "http://api.giphy.com/v1/gifs/search?q="+ req.params.query +"&api_key=dc6zaTOxFJmzC";
  // console.log(searchString);
  request(searchString,function(err,response,body){
    var imageSource = JSON.parse(body).data[0].images.fixed_height.url;
    //res.json(JSON.parse(body));
    res.send('<img src="' +imageSource + '">');
  });
});


// https://www.codewars.com/api/v1/users/:id_or_username
router.get('/:query', function(req,res){
  var searchString = "https://www.codewars.com/api/v1/users/:id_or_username"+ id_or_username.params.query +"&api_key=iiAnQYpFuUF1241uYvHh";
  // console.log(searchString);
  request(searchString,function(err,response,body){
    var codewarprof = JSON.parse(body).data[0].images.fixed_height.url;
    //res.json(JSON.parse(body));
    res.send('<img src="' +imageSource + '">');
  });
});




module.exports = router;
