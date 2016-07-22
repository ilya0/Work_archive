var mongoose = require('mongoose');


var userSchema = mongoose.Schema({
  firstName:String,
  lastName:String,
  email:{type:String, required:true,unique:true},
  meta:{
    age:Number,
    website:String,
    address: String,
    country:String
  },
  createdAt:Date,
  updatedAt:Date
  }

);

userSchema.methods.sayHello = function(){
  console.log('Hi, '+this.firstName);
}; //

var User = mongoose.model('User',userSchema); //making a model with mongoose - use this newly created schema file

module.exports = User; //user with the schema module, module.exports makes the user values to outside programs
