const PI = 3.14;
let radius = 3;
let area = 0;

// Function takes the radius of a circle and returns the area
const circleArea = (radius) => {
  return radius * radius * PI;
};

area = circleArea(radius);
console.log(
  `If the radius of the circle is ${radius}, then the area is ${area}.`
);

radius = 4;
console.log(`If the radius of the circle is ${radius}.`);

area = circleArea(radius);
console.log(`The area of the circle is ${area}.`);
