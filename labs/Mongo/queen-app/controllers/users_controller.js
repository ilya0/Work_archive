var User = require('../models/user'); //linking user to the controller file
var users = {};

users.index = function(req,res){
  User.find({}, function(err,users){
    if(err){
      throw err;
    }
    res.json(users);
  });
};


users.create = function(req,res){
var user = new User();
user.firstName = req.body.firstName;
user.email = req.body.email;

user.save(function(err){
  if(err){
    throw err;
  };
  res.json({sucess:true,message:'User created!'});
  });
};








users.show = function(req,res){
  User.find({email:req.params.email},function(err,user){
    if (err){
      throw err;
    }
    res.json(user);
  });
};










module.exports = users; //all functions and everything is part of this objects
