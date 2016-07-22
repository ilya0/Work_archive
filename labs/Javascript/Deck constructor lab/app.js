var card = function(value,faceValue,color,suit){
  this.value = value;
  this.faceValue = faceValue;
  this.color = color;
  this.suit = suit;

};

var card1 = new card(13,"king","red","spade");


card.prototype.displayName = function(displayName){
  this.displayName = displayName;
};

card1.displayName("spade");


var deck = [];

var deckconstructor = function(value,faceValue,color,suit){
  this.value = value;
  this.faceValue = faceValue;
  this.color = color;
  this.suit = suit;
  deck.push = [this];
};


