var express = require('express');
var router = express.Router();
var homeslist = require('../homes.json');


// index
router.get('/',function(req,res){
res.json({message:"hello"});
});


//
router.put('/:id', function(req,res){
  var id = req.params.id;


});

//Once we have the list of homes as an object, create your RESTful routes! We don't need any views, so we can stick with just the routes that will list all homes, shows a single home, creates a new home, edits a home, and deletes a home.

module.exports = router;
