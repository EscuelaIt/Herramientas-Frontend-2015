import 'bluebird';
import PokeClient from './src';

const client = new PokeClient();

//client.id = 1;
//client.pokemon({id: 2}).then(console.log.bind(console));

Promise.all(
  [1,2,3,4,5,6,7,8,9,10].map( id => client.pokemon({id}) )
)
.then(
  pokemons => pokemons.map(
    pokemon => `${pokemon.name} #${pokemon.pkdx_id}`
  )
)
.then(
  console.log.bind(console)
)
