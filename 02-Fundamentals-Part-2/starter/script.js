'use strict';

// let hasDriversLicence = false;
// const passTest = true;

// if (passTest) hasDriversLicence = true;
// if (hasDriversLicence) console.log('I can drive :D');

// function logger () {
//     console.log('My name is Jonas');
// }

// //calling / running / invoking function
// logger();

// function fruitProcessor (apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges`;
//     return juice;
// }

// // function juiceResult () {
//     const applejuice = fruitProcessor(5, 0);
//     console.log(applejuice);
// // }

// // juiceResult ();
// // juiceResult ();
// // juiceResult ();

// const appleOrangeJuice = fruitProcessor(2 , 4);
// console.log(appleOrangeJuice);

// const jonas = {
//     firstName: 'Jonas',
//     lastName: 'Schnmetman',
//     birthYeah: 1999,
//     job: 'teacher',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriversLicense: true,

    // calcAge: function (birthYeah) {
    //     return 2037 - birthYeah
    // }


    // calcAge: function () {
    //     console.log(this);
    //     return 2037 - this.birthYeah
    // }

//     calcAge: function () {
//         this.age = 2037 - this.birthYeah;
//         return this.age;
//     },

//     makeSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job} and he has ${this.hasDriversLicense ? 'a' : 'no' } drivers licence.`
//     }
// };


// console.log(jonas.calcAge(jonas.birthYeah));
// console.log(jonas['calcAge'](jonas.birthYeah));


// console.log(jonas.calcAge());
// console.log(jonas.age);

// console.log(jonas.makeSummary());


// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

// Your tasks:

// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)

// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method

// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.


// GOOD LUCK �

// const Mark = {
//     fullName: 'Mark',
//     mass: 78,
//     height: 1.69,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// const John = {
//     fullName: 'John',
//     mass: 92,
//     height: 1.95,

//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// Mark.calcBMI() >= John.calcBMI() ? console.log(`Mark's BMI (${Mark.bmi}) is higher than John's BMI (${John.bmi})`) : console.log(`John's BMI (${John.bmi}) is higher than Mark's BMI (${Mark.bmi})`);

// console.log(`${Mark.calcBMI() >= John.calcBMI() ? Mark.fullName : John.fullName} BMI (${Mark.calcBMI() >= John.calcBMI() ? Mark.bmi : John.bmi}) is highter than ${Mark.calcBMI() >= John.calcBMI() ? John.fullName : Mark.fullName} BMI (${Mark.calcBMI() >= John.calcBMI() ? John.bmi : Mark.bmi})`)

// for loop keeps running while condition is TRUE

// for (let rep = 1; rep <= 10; rep ++) {
//     console.log(`Ligting weights repetion ${rep}`);
// }

// const jonasArray = [
//     'Jonas',
//     'Schmedtmann',
//     2037 - 1991,
//     'teacher',
//     ['Michael', 'Peter', 'Steven'],
//     'plm',
//     true,
//     'milcoi',
//     false
//   ];

//   const types = [];

// // jonas [5] does not exist

//   for (let i = 0; i < jonasArray.length ; i++ ) {
//     console.log(jonasArray[i], typeof jonasArray[i]) ;

//     // fiiling types array
//     // types[i] = typeof jonasArray[i];

//     types.push(typeof jonasArray[i]);

//   }

//   console.log (types);

//   const years = [1991, 2007, 1969, 2020];
//   const ages = [];

//   for (let i = 0; i < years.length; i++) {
//    ages.push(2037 - years[i]);
//   }

//   console.log(ages);

//   // continue and break
//   console.log('--- ONLY STRINGS ---')

//   for (let i = 0; i < jonasArray.length ; i++ ) {
//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]) ;
//   }

//   console.log('--- BREAK WITH NUMBER---')
  
//   for (let i = 0; i < jonasArray.length ; i++ ) {
//     if (typeof jonasArray[i] !== 'string') continue;

//     console.log(jonasArray[i], typeof jonasArray[i]) ;
//   }


  // const jonasArray = [
  //   'Jonas',
  //   'Schmedtmann',
  //   2037 - 1991,
  //   'teacher',
  //   ['Michael', 'Peter', 'Steven'],
  // ];

  // for (let i = jonasArray.length - 1; i >= 0; i--) {
  //   console.log(jonasArray[i]);
  // }

  // for (let exercise = 1; exercise < 4; exercise++) {
  //   console.log(`-------Strating exercise ${exercise}`);

  //   for(let rep = 1; rep < 6; rep++) {
  //     console.log(`Exercise ${exercise} repetion ${rep}`);
  //   }
  // }


  // for (let exercise = 1; exercise < 4; exercise++) {
  //   console.log(`-------Strating exercise ${exercise}`);

  //   for(let rep = 1; rep < 6; rep++) {
  //     console.log(`Exercise ${exercise} repetion ${rep}`);
  //   }
  // }

  // for(let rep = 1; rep <= 10; rep++) {
  //   console.log(`Lifting weights repetion ${rep}`);
  // }

  // let rep = 1;
  // while (rep <= 10) {
  //   console.log(`WHILE: Lifting weights repetion ${rep}`);
  //   rep++;
  // }

  // let dice = Math.trunc(Math.random() * 6) + 1;
  // console.log(dice);

  // while (dice !== 6) {
  //   console.log(`You rolled a ${dice}`);
  //   dice = Math.trunc(Math.random() * 6) + 1;
  //   if (dice === 6) console.log(`Loop is about to end...`);
  // }

  // ------------------------- Exercise number 4 lection 2 ---------------------

//   Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:

// 1. Create an array 'bills' containing all 10 test bill values

// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')

// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!

// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52

// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �

// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:

// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together

// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)

// 4.3. Call the function with the 'totals' array

// GOOD LUCK 

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

for ( let i = 0; i <= bills.length - 1; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(tips[i] + bills[i]);
}

console.log(bills, tips, totals);


const calcAverage = function (arr) {
  let sum = 0
  for ( let i = 0; i <= arr.length - 1; i++) {
    // sum = sum + arr[i];
    sum += arr[i];
  }
  return sum / arr.length;
}

console.log(calcAverage(tips));