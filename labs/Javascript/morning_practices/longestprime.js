var isPrime = function(num){
  for(var i= 2; i<num; i++){
    if(num%i===0){

    }else{
      return true;
    }
    return false;
  }
};

var longestPrime = function(num){
    var prime;
    for (var i = 2; i < num; i++){
        if(isPrime(i)){
            prime = i;
        }
    }
    return prime;
}

longestPrime(15);   //13
