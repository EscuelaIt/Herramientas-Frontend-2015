require('bluebird');
var PokeClient = require('./lib');

var client = new PokeClient();

Promise.all(
  [1,2,3,4,5,6,7,8,9,10].map(
    function(id){return client.pokemon(id)}
  )
)
.then(
  function(pokemons){return pokemons.map(
    function(pokemon){return pokemon.name + ' #' + pokemon.pkdx_id;}
  )}
)
.then(
  console.log.bind(console)
)
