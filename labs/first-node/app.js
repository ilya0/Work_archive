var myModule = require('./my-module.js');
var chalk = require('chalk');
// this how you add a dependency of your own, no ./ when adding your own dependancy

var car = require('./car.js');

console.log("Hello world");
console.log(myModule.name);


for( var i=0; i<myModule.arr.length;i++){
  console.log(myModule.arr[i]);
}

// //this is what the file is doing

// var car = require('./car.js');

// // car.js
// module.exports = {
//   color: 'red',
//   speed: 0,
//   accelerate: function(){

//   }
// };


var car = require('./car.js');

car.accel(20);

car.speed
car.accel(30);
car.speed //50
