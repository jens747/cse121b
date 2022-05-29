/* Lesson 3 */

/* FUNCTIONS */

// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(number1, number2) {
  return parseInt(number1) + parseInt(number2);
}

// Step 2: In the function, return the sum of the parameters number1 and number2

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function addNumbers() {
  let addend1 = document.querySelector("#addend1").value;
  let addend2 = document.querySelector("#addend2").value;
  let getSum = document.querySelector("#sum");

  const sumOfTwo = add(addend1, addend2);

  getSum.value = sumOfTwo;
}

// Step 4: Assign the return value to an HTML form element with an ID of sum

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
const addNumBtn = document.querySelector("#addNumbers");
addNumBtn.addEventListener("click", addNumbers);

// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
const subtractFunction = function subtract(number1, number2) {
  return parseInt(number1) - parseInt(number2);
}

function subtractNumbers() {
  let minuend = document.querySelector("#minuend").value;
  let subtrahend = document.querySelector("#subtrahend").value;
  let getDiff = document.querySelector("#difference");

  const diffOfTwo = subtractFunction(minuend, subtrahend);

  getDiff.value = diffOfTwo;
}

const subNumBtn = document.querySelector("#subtractNumbers");
subNumBtn.addEventListener("click", subtractNumbers);

// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
const multiply = (number1, number2) => {
  return parseFloat(number1) * parseFloat(number2);
}

const multiplyNumbers = () => {
  let factor1 = document.querySelector("#factor1").value;
  let factor2 = document.querySelector("#factor2").value;
  let getProduct = document.querySelector("#product");

  const productOfTwo = multiply(factor1, factor2);

  getProduct.value = productOfTwo;
}

const multNumBtn = document.querySelector("#multiplyNumbers");
multNumBtn.addEventListener("click", multiplyNumbers);

// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (number1, number2) => {
  return parseFloat(number1) / parseFloat(number2);
}

const divideNumbers = () => {
  let dividend = document.querySelector("#dividend").value;
  let divisor = document.querySelector("#divisor").value;
  let getQuotient = document.querySelector("#quotient");

  const quotientOfTwo = divide(dividend, divisor);

  getQuotient.value = quotientOfTwo;
}

const quotientNumBtn = document.querySelector("#divideNumbers");
quotientNumBtn.addEventListener("click", divideNumbers);

// Step 9: Test all of the mathematical functionality of the task3.html page.


/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
const currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let currentYear = null;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
currentYear = currentDate.getFullYear();

// Step 4: Assign the current year variable to an HTML form element with an ID of year
const displayCurrentYear = document.querySelector("#year");

displayCurrentYear.innerHTML = currentYear;

/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numbersArray = [];
for (let i = 1; i <= 25; i++) {
  numbersArray.push(i);
}
console.log(numbersArray);

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
const htmlArray = document.querySelector("#array"); 
htmlArray.innerHTML = numbersArray;

// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the result to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = document.querySelector("#odds");
const evens = document.querySelector("#evens");
let oddNumbers = []
let evenNumbers = []

numbersArray.filter((number) => {
  (number % 2) ? oddNumbers.push(number) : evenNumbers.push(number);
})

odds.innerHTML = oddNumbers;

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
evens.innerHTML = evenNumbers;

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const sumArray = numbersArray.reduce((num1, num2) => num1 + num2);

document.querySelector("#sumOfArray").innerHTML = sumArray;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const doubleArray = numbersArray.map(num => num * 2);

document.querySelector("#multiplied").innerHTML = doubleArray;

// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const sumDoubleArray = doubleArray.reduce((num1, num2) => num1 + num2);

document.querySelector("#sumOfMultiplied").innerHTML = sumDoubleArray;