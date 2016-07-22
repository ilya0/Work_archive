angular.module("bankGaApp",[])
        .controller('bankController', bankController);

function bankController(){
  var self = this;
  self.add =add;
  self.entries = [];
  self.newEntryobject ={};
  self.balance = 10000;
  self.message =" test ";



self.add = function(){
//this could be a way to do it also, and you wouldnt have to add a self.add in the bankController
}




  function add(){

  self.message = " "
  console.log(self.newEntryobject);

    if(self.newEntryobject.typeamount === "deposit"){  //deposit logic
      self.balance += self.newEntryobject.amount;
     // self.newEntryobject.date =new Date;

    }else if(self.newEntryobject.typeamount === "withdrawl"){  //withdrall logic

            if(self.newEntryobject.amount > self.balance){   //if low balance section of the withdrawl

              self.message = " Low Balance - Cannot withdrawl";
              return;

              }else{
              self.balance -= self.newEntryobject.amount;
            }

    }else{
      self.message = " Need to select a type ";
      return;
    }

  self.newEntryobject.date =new Date();
  self.entries.push(self.newEntryobject);
  self.newEntryobject={};

  }


};




