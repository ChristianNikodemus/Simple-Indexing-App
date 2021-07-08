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

// I've added these variables to access data within the pokemonList

let pokemonOneName = pokemonList[0].name;
//console.log(pokemonOneName);

let pokemonTwoName = pokemonList[1].name;
//console.log(pokemonTwoName);

let pokemonThreeName = pokemonList[2].name;
//console.log(pokemonThreeName);

// These console logs check the type of value for the heights of the pokemon
//console.log(typeof pokemonList[0].height);
//console.log(typeof pokemonList[1].height);
//console.log(typeof pokemonList[2].height);
