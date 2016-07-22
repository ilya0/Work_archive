angular.module('ThePresidentsApp', [])
 .controller('PresidentsController', PresidentsController);

PresidentsController.$inject = ['$http']; //telles the app that we want to use that library

function PresidentsController($http){
 var self = this;
 self.all =[];
 // self.all = [
 //   {name: 'George Washington', start: 1789, end: 1797 },
 //   {name: 'John Adams', start: 1797, end: 1801 },
 //   {name: 'Thomas Jefferson', start: 1801, end: 1809 },
 //   {name: 'James Madison', start: 1809, end: 1817 }
 // ]
 self.addPresident = addPresident;
 self.newPresident = {};
 self.deletePresident = deletePresident;

 function getPresidents(){
   $http
   .get('http://localhost:3000/presidents')
   .then(function(response){
     console.log(response);
     self.all =response.data.presidents;
   });
 }

 getPresidents();

 function addPresident(){
   $http
   .post('http://localhost:3000/presidents', self.newPresident)
   .then(function(response) {
     getPresidents();
   });
     self.newPresident = {};
 }

 function deletePresident(president){
   $http
     .delete("http://localhost:3000/presidents/" + president._id)
     .then(function(response){
       var index = self.all.indexOf(president);
       self.all.splice(index, 1);
     });
 }
}
