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

  function addListItem(pokemon) {
    let container = document.querySelector('.pokemon-list');
    let listItem = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('my-button');
    listItem.appendChild(button);
    container.appendChild(listItem);

    // Event listener for when a user clicks a button
    button.addEventListener('click', function () {
      showDetails(pokemon.name);
    });
  }

  function showDetails(pokemon) {
    console.log(pokemon);
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  };
})();


// Added Charizard to my pokemonList
pokemonRepository.add({ name: 'Charizard', height: 1.7, types: ['fire','flying'] });


pokemonRepository.getAll().forEach(function(pokemon) {
  pokemonRepository.addListItem(pokemon);
});
