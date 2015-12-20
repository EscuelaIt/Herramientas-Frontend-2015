require 'bluebird'

PokeApi = require './src'

client = new PokeApi()

Promise.all(
 [1..10].map( (id) -> client.pokemon(id) )
)
.then(
  (pokemons) -> pokemons.map( (pokemon) -> "#{pokemon.name} ##{pokemon.pkdx_id}" ) 
)
.then(
  console.log.bind(console)
)
