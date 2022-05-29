/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
const myName = "Joel Jensen";

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector("#name").textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
const currentYr = "2022";

// Step 4: place the value of the current year variable into the HTML file
document.querySelector("#year").textContent = currentYr;

// Step 5: declare and instantiate a variable to hold the name of your picture
const basicImg = "images/person.png";

// Step 6: copy your image into the "images" folder

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector("img").setAttribute("src", basicImg);
document
  .querySelector("img")
  .setAttribute("alt", "Image of a person sitting down.");

/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
const foodFavs = [
  "chocolate cake",
  " apple pie",
  " blueberry pancakes",
  " pepperoni pizza",
];

// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector("#food").textContent = foodFavs;

// Step 3: declare and instantiate a variable to hold another favorite food
const moreFoodFavs1 = " strawberry ice cream";

// Step 4: add the variable holding another favorite food to the favorite food array
foodFavs.push(moreFoodFavs1);

// Step 5: repeat Step 2
document.querySelector("#food").textContent = foodFavs;

// Step 6: remove the first element in the favorite foods array
foodFavs.shift();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = foodFavs;

// Step 8: remove the last element in the favorite foods array
foodFavs.pop();

// Step 7: repeat Step 2
document.querySelector("#food").textContent = foodFavs;
