// variable containing array of objects with data of different pokemon wrapped in a IIFE
let pokemonRepository = (function () {
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

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  return {
    add: add,
    getAll: getAll
  };
})();


// Added Charizard to my pokemonList
pokemonRepository.add({ name: 'Charizard', height: 1.7, types: ['fire','flying'] });


pokemonRepository.getAll().forEach(function(pokemon) {
  if (pokemon.height >=2){
    document.write(`<li class="pokeList">${pokemon.name} (height: ${pokemon.height})<br/><p>Wow, that's big!<p></li>`)
  } else {
    document.write(`<li class="pokeList">${pokemon.name} (height: ${pokemon.height})</li>`)
  }
});
