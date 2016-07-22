//dreams_controller.js

angular // adds angular
  .module('DemoApp') //refferencing the app.js that was created
  .controller('DreamsController', DreamsController); //refference to the function under the controllername

function DreamsController(){
  var self = this; // self is setting to this and this is an object within the dreamsCrontroller that is exposed within the view
  self.message = "something string";

};
