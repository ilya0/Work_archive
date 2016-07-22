
// var carprop = {
//   color :'red',
//   type:'convertible',
//   speed :0
// };

// var accel = function(speedadd){
//   carprop.speed = carprop.speed + speedadd;
// return carprop.speed;
// };

// var decel = function(speedsub){
//   carprop.speed = carprop.speed - speedsub;
// return carprop.speed;
// };


module.exports = {
  color: 'red',
  convertible: true,
  speed:currentspeed,
  accel: function(accelSpeed){
    this.speed = this.speed + accelSpeed
  },
  decel: function(decelSpeed){
    this.speed -= this.speed-=decelSpeed
  }
};

module.exports = car

