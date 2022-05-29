// Array with names of weekdays
const daysOfWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

// Array with months of the year
const monthsOfYear = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Elements to add current date to
const weekday = document.querySelector("#weekday");
const showDate = document.querySelector("#date");

// Variable used to insert date into webpage
const copyrightYear = document.querySelector("#copyrightYear");
const lastModified = document.querySelector("#lastModified");

// Create new date object
const currentDateInfo = new Date();

// Function to format current time
const formTime = (currentDateInfo) => {
  // Get current hours
  let currentHour = currentDateInfo.getHours();

  // Add leading zero to minutes if necessary
  let currentMinute = currentDateInfo.getMinutes();
  currentMinute = currentMinute <= 9 ? "0" + currentMinute : currentMinute;

  // Check for AM or PM
  const currentAMPM = currentHour >= 11 ? "PM" : "AM";

  // Convert hours to 12 hour format
  if (currentHour > 12) {
    currentHour -= 12;
  }

  if (currentHour === 0) {
    currentHour = 12;
  }

  // Return formatted string of time
  return `${currentHour}:${currentMinute} ${currentAMPM}`;
};

// Variables for day, month, date, year, and time
const currentDay = daysOfWeek[currentDateInfo.getDay()];
const currentMonth = monthsOfYear[currentDateInfo.getMonth()];
const currentDayOf = currentDateInfo.getDate();
const currentYear = currentDateInfo.getFullYear();
const currentTime = formTime(currentDateInfo);
const currentModDateTime = ` ${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear} ${currentTime}`;
const currentDateTime = `${currentDay}, ${currentMonth} ${currentDayOf}, ${currentYear}`;

// copyrightYear.textContent = currentDateAndTime.getFullYear();
copyrightYear.textContent = currentYear;
lastModified.textContent = currentModDateTime;

weekday.textContent = currentDay;
showDate.textContent = currentDateTime;
