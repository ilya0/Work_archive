//main.js

//making a recursve function
var rpsarray =["rock","paper","scissor"];
var resultsArray =[];
var rounds = 2;

var rpsPoss = function(){

  for(var i=0;i<resultsArray.length; i++){ //go into the first layer
      for(var j=0;j<resultsArray.length; j++){ //second layer

        var pushobject = [rpsarray[i],rpsarray[j]]; //this creates the combo object to be pushed in
        resultsArray.push(pushobject); //pushing in the combo object into the resultsArray
    }
  }
return  resultsArray; //return the result array


};

rpsPoss();
