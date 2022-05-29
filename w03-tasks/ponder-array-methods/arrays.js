// Activity 1
const values = ["one", "two", "three"];

const htmlList = values.map(val => `<li>${val}</li>`);
// const htmlList = values.map(function(val) {
//   return `<li>${val}</li>`;
// });

const myList = document.querySelector("#myList");

myList.innerHTML = htmlList.join();
myList.innerHTML = htmlList.map(item => item);
// document.getElementById("myList").innerHTML = htmlList.join();

// Activity 2
const grades = ['A', 'B', 'A'];

const gpa = grades.map(grade => getGpa(grade));
// const gpa = grades.map(getGpa);

console.log(`GPA: ${gpa}`)

function getGpa(letter) {
  if (letter == 'A') {
    return 4.0;
  } else if (letter == 'B') {
    return 3.0;
  } else if (letter == 'C') {
    return 2.0;
  } else if (letter == 'D') {
    return 1.0;
  } else {
    return 0;
  }
}

// Activity 3
const avgGpa = gpa.reduce((prev, current) => prev + current) / gpa.length;
// const avgGpa = (...gpa) => gpa.reduce((prev, current) => prev + current) / gpa.length;
// const avgGpa = gpa.reduce(function(prev, current) {
//   return prev + current, 0;
// }) / gpa.length;

// console.log(avgGpa(4, 3, 4));
console.log(avgGpa);


// Activity 4
const fruit = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const filteredFruit = fruit.filter((keep) => keep.length >= 6);
// const filteredFruit = fruit.filter(function (fruit) {
//   return fruit.length >= 6;
// });

console.log(`Filtered: ${filteredFruit}`);


// Activity 5
const numbers = [12, 34, 21, 54];

const luckNumber = 21;

const lucky = numbers.indexOf(luckNumber);

console.log(lucky);