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

// This is a loop that loops through the pokemonList objects
// and writes their name and height to the index.html page
for (let i=0; i < pokemonList.length; i++) {
  document.write(`<li class="pokeList">${pokemonList[i].name} (height: ${pokemonList[i].height})</li>`)
}
