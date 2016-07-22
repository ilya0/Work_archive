angular
.module('myApp')
.controller("app_controller",app_controller)

function app_controller(){
  var self =this;
  self.items =["A", "List", "Of", "Items"];

}
