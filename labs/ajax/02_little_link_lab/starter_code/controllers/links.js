var Link = require('../models/link.js'); //require models/links as Link var
var controller = {}; //controller export var



controller.index = function(req, res) { //index function
  Link.find({}, function(err, links) {  // find the value and execute this function

    if (err) throw err; // if error throw err
    res.json(links);   // if not throw a json with the links db
  });
};



controller.create = function(req, res) {
  //console.log(req.body.url);
  var url = req.body.url;
  var title = req.body.title;
  var clicks = req.body.clicks;
  var link = new Link({url:url, title:title});

  link.save(function(err, links){
      if (err) throw err;
        res.json(links);
  });
};


module.exports = controller;
