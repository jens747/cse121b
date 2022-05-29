const bestOfTheDay = {
  thought: [
    {
      content:
        "Success in any endeavor depends on the degree to which it is an expression of your true self. ",
      author: "Ralph Marston",
    },
    {
      content: "Intense love does not measure, it just gives.",
      author: "Mother Teresa",
    },
    {
      content: "The person who never made a mistake never tried anything new.",
      author: "Albert Einstein",
    },
    {
      content: "Without the rain there would be no rainbow.",
      author: "Gilbert Chesterton",
    },
    {
      content: "Work is always an antidote to depression.",
      author: "Eleanor Roosevelt",
    },
    {
      content:
        "Care about what other people think and you will always be their prisoner.",
      author: "Lao Tzu",
    },
    {
      content: "Take care of your cents: dollars will take care of themselves.",
      author: "Thomas Jefferson",
    },
  ],
  word: {
    name: "",
    definition: "",
  },
  // Returns a random integer from 0 to 99:
  number: Math.floor(Math.random() * 151) + 1,
  letter: function () {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    console.log(letters);
    return letters[Math.floor(Math.random() * letters.length)];
  },
  currentLetter: "",
  song: [
    {
      title: "The Spirit of God",
      page: 2,
      author: "William W. Phelps",
      music: "Anonymous",
    },
    {
      title: "Now Let Us Rejoice",
      page: 3,
      author: "William W. Phelps",
      music: "Henry Tucker",
    },
    {
      title: "High on the Mountain Top",
      page: 5,
      author: "Joel H. Johnson",
      music: "Ebeneezer Beesley",
    },
    {
      title: "Redeemer of Israel",
      page: 6,
      author: "Joseph Swain",
      music: "Freeman Lewis",
    },
    {
      title: "Praise to the Man",
      page: 27,
      author: "William W. Phelps",
      music: "Scottish folk song",
    },
    {
      title: "A Poor Wayfaring Man of Grief",
      page: 29,
      author: "James Montgomery",
      music: "George Coles",
    },
    {
      title: "Come, Come, Ye Saints",
      page: 30,
      author: "William Clayton",
      music: "English folk song",
    },
  ],
};

const newInspiration = document.querySelector("#inspiration");

const url = `https://pokeapi.co/api/v2/pokemon/${bestOfTheDay.number}`;

async function iChooseYou(url) {
  const res = await fetch(url);

  if (res.ok) {
    const data = await res.json();
    pokemonList = data;
    selectPokemon(pokemonList);
  }
}

function selectThought(data) {
  const thought = data.thought[0];
  const addThought = `<h2>The thought of the day is by:\n</h2>
  <p id="author">${thought.author}\n</p>
  <p class="selectP">"${thought.content}"</p>`;

  newInspiration.innerHTML = addThought;
}

function selectNumber(data) {
  const addNumber = `<h2>Today's number is:\n</h2>
    <p id="number">${data.number}</p>`;

  newInspiration.innerHTML = addNumber;
}

function selectLetter(data) {
  let letters = data.currentLetter;

  if (letters === "") {
    letters = data.letter();
    data.currentLetter = letters;
  }

  const addLetter = `<h2>Today's letter is:\n</h2>
    <p id="letter">${letters.toUpperCase()} ${letters}</p>`;

  newInspiration.innerHTML = addLetter;
}

function selectSong(data) {
  const info = data.song[currentDateInfo.getDay()];
  const addSong = `<h2>Today's song is:\n</h2>
    <p id="song">${info.title}\n</p>
    <p class="selectP">Hymn Number: ${info.page}\n</p>
    <p class="selectP">Music: ${info.music}\n</p>
    <p class="selectP">Text: ${info.author}\n</p>`;

  newInspiration.innerHTML = addSong;
}

function selectPokemon(data) {
  results = data;

  const newInspiration = document.querySelector("#inspiration");

  const addData = `<h2>${results.name}</h2>
    <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
  newInspiration.innerHTML = addData;
}

// iChooseYou(url);

function reset() {
  document.querySelector("#inspiration").innerHTML = "";
}

function selectBy() {
  reset();

  let selector = document.querySelector("#selection").value;

  switch (selector) {
    case "thought":
      selectThought(bestOfTheDay);
      break;

    case "number":
      selectNumber(bestOfTheDay);
      break;

    case "letter":
      selectLetter(bestOfTheDay);
      break;

    case "song":
      selectSong(bestOfTheDay);
      break;

    case "pokemon":
      iChooseYou(url);
      break;

    default:
      break;
  }
}

document.querySelector("#selection").addEventListener("click", selectBy);
