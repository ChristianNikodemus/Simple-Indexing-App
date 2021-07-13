// variable containing array of objects with data of different pokemon
let pokemonList = [
  {
    name: 'Sandslash',
    height: 1,
    types: ['ground']
  },
  {
    name: 'Noctowl',
    height: 1.6,
    types: ['flying','normal']
  },
  {
    name: 'Tangrowth',
    height: 2,
    types: ['grass']
  }
];

pokemonList.forEach(function(pokemon) {
  if (pokemon.height >=2){
    document.write(`<li class="pokeList">${pokemon.name} (height: ${pokemon.height})<br/><p>Wow, that's big!<p></li>`)
  } else {
    document.write(`<li class="pokeList">${pokemon.name} (height: ${pokemon.height})</li>`)
  }
});
