const axios = require('axios');
/* 
Using an api endpoint like this: https://pokeapi.co/api/v2/pokemon/ditto

Write a function that takes a pokemon name and gives back an object similar to this:
{
  name: "ditto",
  abilities: [{},{}],
  height: 3,
  base_experience: 48
}



Bonus challenge: Output an object similar to the following: 
{
  name: "ditto",
  firstAbilityName: "limber",
  firstMove: "transform"
}



If you don't know any pokemon names to test this with, here are some to get you started:
pikachu
charmander
bulbasaur
*/


function catchEmAll(pokemonName) {
  return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      .then((response) => {
          return {
              name: response.data.name,
              abilities: response.data.abilities,
              height: response.data.height,
              base_experience: response.data.base_experience,
          };
      })
      .catch((error) => {
          return error.message;
      });
}

catchEmAll("pikachu")