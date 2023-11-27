"use strict";

/* const bookings = [];

const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //   numPassengers = numPassengers || 1;
  //   price = price || 199;

  const booking = {
    flightNum,
    numPassengers,
    price,
  };

  console.log(booking);
  bookings.push(booking);
};

createBooking("LH123");
createBooking("LH123", 2, 800);
createBooking("LH123", 2);
createBooking("LH123", 5);

createBooking("LH123", undefined, 1000);


///////////////////////////////////////
// How Passing Arguments Works: Values vs. Reference
const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 24739479284) {
    alert('Checked in');
  } else {
    alert('Wrong passport!');
  }
};

// checkIn(flight, jonas);
// console.log(flight);
// console.log(jonas);

// Is the same as doing...
// const flightNum = flight;
// const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas);




// 130 Lesson Udemy - Teorie

// 131 Lesson Udemy

const oneWord = function (str) {
  return str.replace(/ /g, "").toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(" ");
  return [first.toUpperCase(), ...others].join(" ");
};

// Higher-order function
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer("JavaScript is the best!", upperFirstWord);

transformer("JavaScript is the best!", oneWord);

// Test Adrian
// const high5 = function () {
//   const imput = prompt("Ce zici fratele?");
//   console.log(imput);
//   alert("imput");
// };

const high5 = function () {
  console.log("wave ~~");
};

document.body.addEventListener("click", high5);

["Jonas", "Martha", "Adam"].forEach(high5);

// JS uses callbacks all the time

*/

//132 Lesson Udemy

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

// Challenge Arrow function
const greet2 = (greeting) => {
  return (name) => console.log(`${greeting} ${name}`);
};

// Challenge Arrow function v2.
const greet3 = (greeting) => (name) => console.log(`${greeting} ${name}`);

const greeterHey = greet("Hey");
const greeterHey2 = greet2("Hey2");
const greeterHey3 = greet3("Hey3");

greeterHey("Jonas");
greeterHey("Steven");

greet("Hello")("Jonas");
greet2("Hello")("Jonas");
greet3("Hello")("Jonas");
