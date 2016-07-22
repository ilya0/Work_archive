var express = require('express');
var router = express.Router();
var got = require('../got.json');
var houses = got.houses;

// get localhost:3000/api/houses?name=something
//curl "localhost:3000/api/houses?name=starks" - example of terminal command
// no X because get is the default but can be used
router.get('/',function(req,res){
  var query = req.query; // this is to filter the data from the API
  var filteredList =[];
  //init var
  if(query.name){ //if your dont put in a query name, then it will set filtered list to houses
    for(var i=0; i<houses.length; i++){
     if(houses[i].name.toLowerCase() === query.name.toLowerCase()){
        filteredList.push(houses[i]);
        }
      }

  }else{
    filterList = houses;
    }
res.json(filteredList);
});

// get localhost:3000/api/houses/something
router.get('/:query',function(req,res){
  var query = req.query;
req.params.query;
});


//POST localhose:3000/api/
// curl -X POST -d "<data>" localhost:3000/api/houses
router.post('/', function(req,res){
var body = req.body; //run through body parser take the body of of requested block of info
houses.push(body);//push the body to houses
res.json(body); //output the body
});


router.put('/:id', function(req,res){
 var id = req.params.id;
 var body = req.body;
 houses[id] = body; //acceses specfici item in our array
 res.json(houses[i]); //returns the body
});


router.get('/:id', function(req,res){
var id = req.params.id;
//set the id to the particular id
res.json(houses[id]);
//
});

//use curl -X DELETE localhost:3000/api/houses/0
//delete route
router.delete('/:id', function(req,res){
var id = req.params.id;

//modifiying an array
var removed = houses.splice(id,1);
res.json(removed);




});







module.exports = router;

