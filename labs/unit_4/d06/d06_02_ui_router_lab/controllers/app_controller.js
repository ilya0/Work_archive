angular
.module('movieApp')
.controller('appController',appController)
.controller('listController',listController);

function appController(){
var self = this;
self.search = search;
self.message = "test message";


function search(){

}

};



function listController($http,$stateParams){

}
