/* Lesson 5 */

/* IF/ELSE IF */

// Step 1: Declare and initialize a new variable to hold the current date
const todaysDate = new Date();

// Step 2: Declare another variable to hold the day of the week
let dayOfWeek;

// Step 3: Using the variable declared in Step 1, assign the value of the variable declared in Step 2 to the day of the week ( hint: getDay() )
dayOfWeek = todaysDate.getDay();

// Step 4: Declare a variable to hold a message that will be displayed
let displayedMessage;

// Step 5: Using an if statement, if the day of the week is a weekday (i.e. Monday - Friday), set the message variable to the string 'Hang in there!'
if (dayOfWeek > 0 && dayOfWeek <= 5) {
  displayedMessage = "Hang in there!";
}

// Step 6: Using an else statement, set the message variable to 'Woohoo!  It is the weekend!'
else {
  displayedMessage = "Woohoo! It is the weekend!";
}

/* SWITCH, CASE, BREAK */

// Step 1: Declare a new variable to hold another message
let switchMessage;

// Step 2: Use switch, case and break to set the message variable to the day of the week as a string (e.g. Sunday, Monday, etc.) using the day of week variable declared in Step 2 above
switch (dayOfWeek) {
  case 0:
    switchMessage = "Sunday";
    break;
  case 1:
    switchMessage = "Monday";
    break;
  case 2:
    switchMessage = "Tuesday";
    break;
  case 3:
    switchMessage = "Wednesday";
    break;
  case 4:
    switchMessage = "Thursday";
    break;
  case 5:
    switchMessage = "Friday";
    break;
  case 6:
    switchMessage = "Saturday";
    break;

  default:
    break;
}

/* OUTPUT */

// Step 1: Assign the value of the first message variable to the HTML element with an ID of message1
document.querySelector("#message1").innerHTML = displayedMessage;

// Step 2: Assign the value of the second message variable to the HTML element with an ID of message2
document.querySelector("#message2").innerHTML = switchMessage;

/* FETCH */

// Step 1: Declare a global empty array variable to store a list of temples
let templeList = [];

// Step 2: Declare a function named output that accepts a list of temples as an array argument and does the following for each temple:
// - Creates an HTML <article> element
// - Creates an HTML <h3> element and add the temple's templeName property to it
// - Creates an HTML <h4> element and add the temple's location property to it
// - Creates an HTML <h4> element and add the temple's dedicated property to it
// - Creates an HTML <img> element and add the temple's imageUrl property to the src attribute and the temple's templeName property to the alt attribute
// - Appends the <h3> element, the two <h4> elements, and the <img> element to the <article> element as children
// - Appends the <article> element to the HTML element with an ID of temples
async function output(templeList) {
  templeList.forEach((temple) => {
    let templeArticle = document.createElement("article");

    let templeH3 = document.createElement("h3");
    templeH3.innerHTML = temple.templeName;

    let templeLoc = document.createElement("h4");
    templeLoc.innerHTML = temple.location;

    let templeDed = document.createElement("h4");
    templeDed.innerHTML = temple.dedicated;

    let templeImg = document.createElement("img");
    templeImg.setAttribute("src", temple.imageUrl);
    templeImg.setAttribute("alt", temple.templeName);

    templeArticle.appendChild(templeH3);
    templeArticle.appendChild(templeLoc);
    templeArticle.appendChild(templeDed);
    templeArticle.appendChild(templeImg);

    document.querySelector("#temples").appendChild(templeArticle);
  });
}

// Step 3: Using the built-in fetch method, call this absolute URL: 'https://byui-cse.github.io/cse121b-course/week05/temples.json'
const url = "https://byui-cse.github.io/cse121b-course/week05/temples.json";

async function buildTemples(url) {
  const res = await fetch(url);

  if(res.ok) {
    const data = await res.json();
    templeList = data;
    output(templeList);
  }
}

buildTemples(url);

// Step 4: Add a .then() method to turn the returned string into a JavaScript object ( hint: .json() )

// Step 5: Add another .then() method with a variable name to hold the temples and an empty arrow function

// Step 6: Inside of second .then() method, assign the list of temples (as a JSON object) to the temples variable

// Step 7: Finally, call the output function and pass it the list of temples

// Step 8: Declare a function named reset that clears all of the <article> elements from the HTML element with an ID of temples
function reset() {
  document.querySelector("#temples").innerHTML = "";
}

// Step 9: Declare a function named sortBy that does the following:
// - Calls the reset function
// - Sorts the global temple list by the currently selected value of the HTML element with an ID of sortBy
// - Calls the output function passing in the sorted list of temples
const sortBy = () => {
  reset();

  let filter = document.querySelector("#sortBy").value;

  switch (filter) {
    case "templeNameAscending":
      output(
        templeList.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 < templeName2) return -1;
          else if (templeName1 > templeName2) return 1;
          else return 0;
        })
      );
      break;
    case "templeNameDescending":
      output(
        templeList.sort((temple1, temple2) => {
          let templeName1 = temple1.templeName.toLowerCase();
          let templeName2 = temple2.templeName.toLowerCase();
          if (templeName1 > templeName2) return -1;
          else if (templeName1 < templeName2) return 1;
          else return 0;
        })
      );
      break;
    default:
      // using ternary operators
      output(
        templeList.sort((temple1, temple2) =>
          temple1.templeName.toLowerCase() > temple2.templeName.toLowerCase()
            ? 1
            : temple2.templeName.toLowerCase() >
              temple1.templeName.toLowerCase()
            ? -1
            : 0
        )
      );
      break;
  }
};

// Step 10: Add a change event listener to the HTML element with an ID of sortBy that calls the sortBy function
document.querySelector("#sortBy").addEventListener("change", sortBy);

/* STRETCH */

// Consider adding a "Filter by" feature that allows users to filter the list of temples
// This will require changes to both the HTML and the JavaScript files
const filterBy = () => {
  reset();

  let filters = document.querySelector("#filter").value;

  switch (filters) {
    case "Bountiful":
      filterPrompt("Bountiful");
      break;
    case "Brigham City":
      filterPrompt("Brigham City");
      break;
    case "Cedar City":
      filterPrompt("Cedar City");
      break;
    case "Draper":
      filterPrompt("Draper");
      break;
    case "Jordan River":
      filterPrompt("Jordan River");
      break;
    case "Logan":
      filterPrompt("Logan");
      break;
    case "Manti":
      filterPrompt("Manti");
      break;
    case "Monticello":
      filterPrompt("Monticello");
      break;
    case "Mount Timpanogos":
      filterPrompt("Mount Timpanogos");
      break;
    case "Ogden":
      filterPrompt("Ogden");
      break;
    case "Oquirrh Mountain":
      filterPrompt("Oquirrh Mountain");
      break;
    case "Payson":
      filterPrompt("Payson");
      break;
    case "Provo":
      filterPrompt("Provo");
      break;
    case "Salt Lake":
      filterPrompt("Salt Lake");
      break;
    case "St. George":
      filterPrompt("St. George");
      break;
    default:
      output(templeList);
  }
}

const filterPrompt = (prompt) => {
  output(
    templeList.filter((temple) => {
      if(temple.templeName.includes(prompt))
        return true;
        else return false;
    })
  );
}

document.querySelector("#filter").addEventListener("click", filterBy);
