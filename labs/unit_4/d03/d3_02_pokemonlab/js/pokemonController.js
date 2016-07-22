angular.module('PokemonApp')
.controller('PokemonController',PokemonController);

PokemonController.$inject = ['PokemonFactory']

function PokemonController(PokemonFactory){
  var self = this;
  self.api = PokemonFactory;

  self.allPokemon =[];

  self.api.getAllPokemon()
    .success(function(data){
      console.log("getting all pokemon:" +data.pokemon)
      self.allPokemon = data.pokemon

    })

    self.poke ={};
    self.showPokemon = showPokemon;

    function showPokemon(id){
      console.log("Show pokemon: " + id)
      self.api.getOnePokemon(id)
        .success(function(pokemon){
          self.pokemon = pokemon;
        console.log(pokemon)
      })

    }
}
