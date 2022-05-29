// fetch.js
const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}

async function getPokemonList(url) {
  const res = await fetch(url);

  if (res.ok) {
    const data = await res.json();
    doStuffList(data);
  }
}

function doStuff(data) {
  results = data;
  console.log("first: ", results);

  const outputData = document.querySelector("#output");

  const addData = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  outputData.innerHTML = addData;
}

function compare(a, b) {
  if (a.name > b.name) {
    // sort b before a
    return 1;
  } else if (a.name < b.name) {
    // a and b are different are in the correct order
    return -1;
  } else return 0; // a and b are equal
}

function sortPokemon(list) {
  let sortedList = list.sort(compare);
  return sortedList;
}

function doStuffList(data) {
  console.log("Data: ", data);

  const outputList = document.querySelector("#outputList");
  let pokeList = data.results;

  pokeList = sortPokemon(pokeList);
  pokeList.forEach((line) => {
    const addPokemon = `<li>${line.name}</li>`;
    outputList.innerHTML += addPokemon;
  });
}

getPokemon(url);
getPokemonList(urlList);

console.log("second: ", results);
