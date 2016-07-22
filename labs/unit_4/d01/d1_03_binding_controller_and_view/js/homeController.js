//when only he name of the module is passed in, the module method returns the specified module

angular.module('artApp') //init a new module
.controller("functionModule1",functionModule1) //this is a constructor function
.controller("functionModule2",functionModule2)
.controller("functionModule3",functionModule3);
// This the function definition for our controller. Note that we capitalize it as it is used a constructor function


function functionModule1(){
  var self = this;
  self.header = "http://www.metmuseum.org/~/media/Images/Exhibitions/2015/Sargent/Sargent_DIGITAL_Hero.jpg?h=360&mw=988&w=988";
  self.arttitle = "Sargent Portraits of Artists & Friends";
  self.name = "John Sargent";

};
function functionModule2(){
  var self = this;
  self.hours = ["Friday: 10:00 am - 9:00 pm","Friday: 10:00 am - 9:00 pm","Friday: 10:00 am - 9:00 pm","Friday: 10:00 am - 9:00 pm","Friday: 10:00 am - 9:00 pm","Friday: 10:00 am - 9:00 pm","Friday: 10:00 am - 9:00 pm"];
  self.admission =["Adults - $25","Adults - $25","Adults - $25"];
  self.test = "this is a test";
};

function functionModule3(){
  var self = this;
  self.contactNumber ="212-650-2425";
  self.contactEmail = "development@metmuseum.org"; // sets inside the function {awesome:true}
  self.donationAmounts = [4,5,6,7,8,9,16];

};
