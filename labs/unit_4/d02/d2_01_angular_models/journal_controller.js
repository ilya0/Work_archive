//newtitle_controller.js


angular
.module("DemoApp")
.controller('JournalController',JournalController);


function JournalController(){
 var self = this;
 self.isPublic = false;
 self.newTitle = "";
 self.newBody = "";
 self.greet = greet;
 self.entries = [];



function greet(){
  console.log('hi');
}


function add(){
  console.log('add button pressed');
  var newEntry ={
    title: self.Newtitle,
    body:self.NewBody,
    isPublic:self.isPublic
  };

  self.entries.push(newEntry);
  console.log(self.entries);
}
}


