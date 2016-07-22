var io = require('socket.io')();
///installing io object

io.on('connection', function(socket){ //this is the function

  socket.emit('greeting','hello!'); //send out a greeting

socket.on('sup', function(data){
  console.log(data);

})

});







module.exports = io;
