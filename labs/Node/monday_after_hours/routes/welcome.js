// routes/welcome.js
var express = require('express');
var router = express.Router();
router.get('/', function(req, res){
    res.send("Hello and Welcome!");
});

router.get('/pong', function(req, res){
    res.send("pong");
});

router.post('/ping', function(req, res){
    res.send("ping");
});

router.get('/eight_ball', function(req, res){
  var randomnumber=Math.floor(Math.random()*2);
   if(randomnumber == 1){
    res.send("Are you sure?");
}else{
  res.send("all signs point to yes");
}

});

router.get('/rps', function(req, res){
  var randomnumber=Math.floor(Math.random()*3);
   if(randomnumber <1){
    res.send("rock");
    }
else if( randomnumber<2){
res.send("paper");
}
else{
  res.send("scissors");
}
});
// GET '/eight_ball' => "Are you sure?" || "All signs point to YES" || etc

router.get('/rps', function(req, res){
  var randomnumber=Math.floor(Math.random()*3);
   if(randomnumber <1){
    res.send("rock");
    }
else if( randomnumber<2){
res.send("paper");
}
else{
  res.send("scissors");
}
});


router.get('/greetings/lang=:id', function(req,res){
  console.log(req.params);
  if(req.params.id == "en"){
    res.send("hello!");
  }else{}

});

// GET '/greeting' => "Hello!"
// GET '/greeting?lang=en' => "Hello!"
// GET '/greeting?lang=fr' => "Bonjour!"
// GET '/greeting?lang=de' => "Guten Tag!

// router.get('/greeting?lang=(cd)', function(req, res) {
//  res.send('ab(cd)?e');
// });


// GET '/color?name=blue'   => '<h1 style="background: blue">Blue</h1>'


//doesnt work so far
router.get('/test/?name=', function(req,res){
    var color = req.params('name');
console.log("test"+color);
  res.send(color);

});



module.exports = router;
