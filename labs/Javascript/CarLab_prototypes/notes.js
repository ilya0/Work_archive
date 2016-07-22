var instructor = function(name, username) {
  var model = {};

  model.firstName = name;
  model.github = username;

  return model;
};

var me = instructor('Matt','fatchicken007');

var Instructor = function(name, username) {
  // this = {}; Not really what is happening but will clarify later

  this.firstName = name;
  //links the this to the instructor and first name and takes the parameter name
  this.github = username;
// links the this to instructor function and adds teh user name from the paremeter
  // return this;
};

var uncle = new Instructor('Phil','phlco');

//make sure to use the ***New keyword***



var matt = new Instructor('Matt','G');

//prototyping
Instructor.prototype.speak =function(){
  console.log('hi my name is' +this.firstname);
}

matt.speak();

