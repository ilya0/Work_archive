//when only he name of the module is passed in, the module method returns the specified module

angular.module('IntroToAngularApp') //init a new module
.controller("HomeController", HomeController); //this is a constructor function

// This the function definition for our controller. Note that we capitalize it as it is used a constructor function


function HomeController(){
  var self = this;
  self.awesome = true; // sets inside the function {awesome:true}
  self.numbers = [4,5,6,7,8,9,16];





};
