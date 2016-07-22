  var Car = function(make, model, hp){
    ///creates an object with a new constrcutor function
    this.make = make;
    this.model = model;
    this.hp = hp;

  };


  var bmw = new Car("bmw","323",200);

  //prototype is creating a go function through car and then you can evoke
  //it through going bmw.go(90 (which is the value))
  Car.prototype.go = function(mph){
    if (mph<90){
      console.log("speedupgranny your going less than 90");
    }
    else{
      console.log('faster peaon more than 90');
    }
  };

//attach the function to the intial constductor

  Car.prototype.getdetails = function(){
    console.log(this.make,this.model,this.hp);
  };
