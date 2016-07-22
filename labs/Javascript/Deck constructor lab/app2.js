var Card = function(value, suit){
  this.value = value;
  this.suit = suit;
}

var Deck = function(){
  var suits = [
  "Hearts",
  "Clubs",
  "Spade",
  "Diamond"
];

this.cards =[];
for(var i = 1; i < 14; i++){
  for (var j = 0; j < suits.length; j++){
    this.cards.push( new Card(i, suits[j]) );

  }
}
}

Deck.prototype.count = function(){
  return this.cards.length;
}

Deck.prototype.draw = function(){
  return this.card.pop();

}

var deck = new Deck();
deck.cards // an array of cards
deck.count()
