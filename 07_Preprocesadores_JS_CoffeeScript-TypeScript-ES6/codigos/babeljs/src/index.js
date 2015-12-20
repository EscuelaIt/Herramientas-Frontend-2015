import fetch from 'node-fetch';

export default class PokeClient {

  static get ROOT(){return "http://pokeapi.co/api/v1/"}

  constructor(){
    console.log('Calling to constructor!');
    this._id = null;
  }

  set id(pkdx_id){
    this._id = pkdx_id;
  }

  pokemon({id = this._id} = {}){
    return fetch(`${PokeClient.ROOT}pokemon/${id}`).then( res => res.json() );
  }
}
