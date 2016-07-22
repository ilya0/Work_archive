angular
  .module('myApp')
  .controller('AppController', AppController)
  .filter('nameco', function(){
    return function(input){
      return input +'co';};})
.filter('checkmark', function(){
    return function(input){
      if(input === 'true'){
        return  '\u2713';
      }else{
        return '\u2718';
      }
    };
    })
.filter('price', function(){
    return function(input){
      return input +'co';};
    })
.filter('stock', function(){
    return function(input){
      if(input === '0'){
        return 'Free';
      }else{
        return input;
      }
    };
  }).filter('clean', function(){
    return function(input){
      return input.replace(/fuck|shit|bitch|ass/gi, "#$#$");
    };
  });



function AppController() {
  var self = this;
  self.hello = 'Hello World';
  self.money = 100;
 // self.dateyo = new Date;
  self.randomlist = [
  'Jon Snow',
  'Daenerys Targaryen',
  'Melisandre',
  'Arya Stark',
  'Sansa Stark',
  'Tyrion Lannister',
  'Cersei Lannister',
  'Gregor Clegane',
  'Khal Drogo',
  'Joffrey Baratheon',
  'Margaery Tyrell',
  'Bran Stark',
  'Ramsay Bolton',
  'Stannis Baratheon',
  'Theon Greyjoy',
  'Brienne of Tarth',
  'Ygritte',
  'Jamie Lannister'
];
}
