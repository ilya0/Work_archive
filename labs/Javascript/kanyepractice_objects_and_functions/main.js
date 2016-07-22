 var random = function(list) {

  var index = Math.floor( Math.random() * list.length )

  return list[index]
}

var kanye = {
  name: 'Kanye West',
  Occupation: 'Rapper',
  whoamI: function(){
    return "I am" +this.occupation +this.name;
  },

  randomQuotes: ['quote1', 'quote2', 'quote3','quote4'],
  randomQuotefunction : function(){
    return random(kanye.randomQuotes)
  }

}

console.log(kanye.randomQuotefunction());
