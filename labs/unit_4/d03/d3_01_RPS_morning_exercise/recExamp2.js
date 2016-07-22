// recExamp2.js



var recurse = function(num){
   if(num>5){
    return;
  }

  recurse(num+1);
  console.log(num);
   };

   recurse(0);
