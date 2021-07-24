// variable containing array of objects with data of different pokemon wrapped in a IIFE
let pokemonRepository = (function () {

  let pokemonList = [];
  let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

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
