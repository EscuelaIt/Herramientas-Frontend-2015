fetch = require 'node-fetch'

class PokeClient
  @ROOT = "http://pokeapi.co/api/v1/"
  
  constructor: ->

  pokemon: (id) ->
     fetch("#{PokeClient.ROOT}pokemon/#{id}").then( (res) -> res.json())

module.exports = PokeClient
