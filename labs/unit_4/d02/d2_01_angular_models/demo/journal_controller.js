angular
  .module('DemoApp')
  .controller('JournalController', JournalController);

function JournalController() {
  var self = this;
  self.isPublic = false;
  self.newTitle = "";
  self.newBody = "";
  self.greet = greet;
  self.entries = [];
  self.add = add;

  // define function declarations
  // and set them above
  function greet() {
    console.log('hi');
  }

  // write a function called add
  function add() {
    console.log('add entry');
    var newEntry = {
      title: self.newTitle,
      body: self.newBody,
      isPublic: self.isPublic
    };
    self.entries.push(newEntry);
    console.log(self.entries);
  }
  // that takes the form inputs
  // makes an object literal
  // and adds it to self.entries
  // sets the inputs to empty ""
}
