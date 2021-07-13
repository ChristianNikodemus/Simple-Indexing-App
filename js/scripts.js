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

// This is a loop that loops through the pokemonList objects and writes their name and height to the index.html page

pokemonList.forEach(function(pokemon) {
  if (pokemon.height >=2){
    document.write(`<li class="pokeList">${pokemon.name} (height: ${pokemon.height})<br/><p>Wow, that's big!<p></li>`)
  } else {
    document.write(`<li class="pokeList">${pokemon.name} (height: ${pokemon.height})</li>`)
  }
});
