function getGrades(inputSelector) {
  // get grades from the input box
  // gradeInput = document.querySelector("#grades");
  console.log(inputSelector.value)
  // split them into an array (String.split(','))
  const splitGrades = inputSelector.value.split(',');
  console.log(splitGrades);
  // clean up any extra spaces, and make the grades all uppercase. (Array.map())
  const alphaGrades = splitGrades.map((grade) => {
    return grade.trim().toLowerCase();
  });
  
  // return grades
  return alphaGrades;
}

function lookupGrade(grade) {
  // converts the letter grade to it's GPA point value and returns it
  let letterGrades = grade.map((letter) => {
    if (letter === 'a') {
      return 4.0;
    } else if (letter === 'b') {
      return 3.0;
    } else if (letter === 'c') {
      return 2.0;
    } else if (letter === 'd') {
      return 1.0;
    } else {
      return 0;
    }
  });

  const numGrades = letterGrades.filter(num => num > 0 && num <= 4);

  return numGrades;
}

function calculateGpa(grades) {
  // gets a list of grades passed in
  // convert the letter grades to gpa points
  // calculates the GPA
  const initial = 0;
  const sum = grades.reduce((prev, next) => 
    prev + next, initial
  );

  const averageGPA = sum / grades.length;

  // return the GPA
  return averageGPA;
}

function outputGpa(gpa, selector) {
  // takes a gpa value and displays it in the HTML in the element identified by the selector
  selector.innerHTML = `Your GPA is: ${gpa.toFixed(2)}`
}

function clickHandler() {
  // when the button in our html is clicked:
  // get the grades entered into the input
  const gradeArray = getGrades(gradeInput);
  // calculate the gpa from the grades entered
  const numArray = lookupGrade(gradeArray);
  const gpa = calculateGpa(numArray);
  // display the gpa
  outputGpa(gpa, gradeOutput);
}

const submitBtn = document.querySelector("#submitButton");
const gradeInput = document.querySelector("#grades");
const gradeOutput = document.querySelector("#output");

// submitBtn.addEventListener("click", clickHandler);
submitBtn.addEventListener("click", clickHandler);
