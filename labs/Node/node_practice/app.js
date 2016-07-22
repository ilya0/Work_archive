// app.js
var area = require('./area.js');  // require your file
var a = area(3, 4);               // should return 12
console.log(a);                   // should log 12 in the terminal



var leftPad = require('./left_pad.js');
leftPad('hello', 5); //should //return "     hello"


var toParty = require('./to_party');
toParty('it\'s taco tuesday');
// should return "IT'S TACO TUESDAY!!!"
