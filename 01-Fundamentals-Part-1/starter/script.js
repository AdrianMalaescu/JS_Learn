
/*

let js = 'amazing';

console.log(40 + 8 + 23 - 10);
console.log("Jonas")
console.log(23)

let firstName = "bob";
console.log(firstName);
console.log(firstName);
console.log(firstName);


let jonas_matilda = 'JM';
let $function = 27;

let person = "jonas";
let PI = 3.1415

let myFirstJob = 'Programmer';
let myCurrentJob = 'Teacher';

console.log(myFirstJob);

let country = 'Romania';
let continent = 'Bucuresti';
let population = 'Romani';

console.log(country, continent, population);
*/
/*
let javascriptIsFun = true;
console.log(javascriptIsFun);

javascriptIsFun = 'YES!';
console.log(typeof javascriptIsFun);


let year;
console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

*/

// let age = 30;
// age = 31;

// const birthYear = 1991;

// // const job;

// var job = 'smeker';
// job = 'super smeker'

// lastName = "nume"
// console.log(lastName)

// OPERATORS

const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2018;
// console.log(ageJonas, ageSarah);

// console.log(ageJonas * 2, ageJonas / 10, 2 ** 3);

// // * -> inmultire
// // ** -> ridicare la putere

// const firstName = 'Jonas';
// const lastName = 'Schmedtmann';
// console.log(firstName + ' ' + lastName);

// // Asignment operators

// let x = 10 + 5;
// x += 10; // x = x + 10 = 25
// x *= 4; // x = x * 4 = 100
// x++;
// x--;
// x--;
// console.log(x);

// Comparison operators 

// console.log(ageJonas > ageSarah);

// // >, <, >=,<=

// console.log(ageSarah >= 18);

// const isFullAge = ageSarah >= 18;

// console.log(now - 1991 > now - 2018);

// console.log(25 - 10 - 5);

let x, y;

x = y = 25 - 10 - 5; // x = y = 10

console.log(x, y);
const averageAge = (ageJonas + ageSarah) / 2
console.log(ageJonas, ageSarah, averageAge);


// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.
// GOOD LUCK �

// let MarkMass, JohnMass;
// let MarkHeight, JohnHeight;

// MarkMass = 95;
// JohnMass = 85;
// MarkHeight = 1.88;
// JohnHeight = 1.76;

// const MarkBMI = MarkMass / MarkHeight ** 2;
// const JohnBMI = JohnMass / JohnHeight ** 2;

// const markHigherBMI = MarkBMI > JohnBMI;

// console.log(markHigherBMI);

// console.log(MarkBMI, JohnBMI);

// const firstName = 'Jonas';
// const job = 'teacher';
// const birthYear = 1991;
// const year = 2037;

// const jonas = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';

// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regular string...`);

// console.log(`String
// multiple
// lines`)

// const age = 19;

// if (age >= 18) {
//     console.log('Sarah can start driving licence');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Sarah is too young wait another ${yearsLeft} years :) `);
// }

// const birthYear = 1991;
// let century;

// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }

// console.log(century);

// ---------------------------------------- type conversion ----------------------------------------------

// const inputYear = '1991';
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

// console.log(Number('Jonas'))

// console.log (typeof NaN)

// console.log(String(23), 23);

//------------------------------------------ type coercion ----------------------------------------

// console.log('I am ' + 23 + ' years old');
// console.log(`I am 23 years old`);
// console.log('23' - '10' - 3);
// console.log('23' * '2');
// console.log('23' / '2');

// -------------------------   5 falsy values: 0, '', undefined, null, NaN -----------------------------

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));
// console.log(Boolean(NaN));
// console.log(Boolean(undefined));

// const money = 10;
// if (money) {
//     console.log("Don't spend it all;)")st
// } else {
//     console.log ('You should get a job!')
// }

// let height = NaN;
// if (height) {
//     console.log ('YAY! Height is defined');
// } else {
//     console.log('Height is UNDEFINED')
// }


// const age = 18;
// if (age === 18) console.log('You just became an adult (strict)');

// if (age == 18) console.log('You just became an adult (loose)');

// const favourite = Number(prompt ("What is you favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) {
//     console.log('Cool! 23 is an amazing number!')
// } else if (favourite === 7) {
//     console.log('7 is also a cool number')
// } else if (favourite === 6) {
//     console.log ('Number is not 23 or 7')
// } else {
//     console.log ('Gaura, mai incearca')
// }

// if (favourite !== 23) console.log ('Why not 23?');


// --------------------------------------------- Logical Operators ----------------------------------------------



// const hasDriversLicense = true; // A
// const hasGoodVision = true; // B

// console.log(hasDriversLicense && hasGoodVision);
// console.log(hasDriversLicense || hasGoodVision);
// console.log(!hasDriversLicense);

// const shouldDrive = hasDriversLicense && hasGoodVision;

// if(shouldDrive) {
// console.log('Sarah is able to drive!')
// } else {
//     console.log('Someone else should drive...')
// }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//     console.log('Sarah is able to drive');
// } else {
//     console.log('Someoane else should drive...');
// }



// ------------------------- Challange 3 ----------------------

// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!

// Your tasks:

// 1. Calculate the average score for each team, using the test data below

// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)

// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �

// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy

// Test data:

// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

// GOOD LUCK �


// const DolphinsScore = (100 + 10 + 10) / 3;
// const KoalasScore = (100 + 10 + 10) / 3;

// if (!(DolphinsScore >= 100) && !(KoalasScore >= 100)){
//     console.log ('There is no team with score above 100, so there is no winner')
// } else if (DolphinsScore === KoalasScore){
//     console.log('Draw, both teams have the same score')
// } else if (DolphinsScore > KoalasScore) {
//     console.log ('Dolphins win')
// } else if (DolphinsScore < KoalasScore) {
//     console.log('Koalas win')
// }

// const DolphinsScore2 = (100 + 10 + 10) / 3;
// const KoalasScore2 = (100 + 10 + 10) / 3;

// if (DolphinsScore2 > KoalasScore2 && DolphinsScore2 >= 100) {
//     console.log ('dolphine wins')
// } else if (DolphinsScore2 < KoalasScore2 && KoalasScore2 >= 100) {
//     console.log('koalas wins')
// } else if (DolphinsScore2 === KoalasScore2 && KoalasScore2 >= 100 && DolphinsScore2 >= 100){
//     console.log ('both win yay') 
// } else {
//     console.log('nobody wins')
// }


// -------------------------------------- Coding Challange 4 --------------------------------------

// Steven wants to build a very simple tip calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.

// Your tasks:

// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)

// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”

// Test data:

// § Data 1: Test for bill values 275, 40 and 430

// Hints:

// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �
// GOOD LUCK �

// ----------------- Problema cu ternary operator -------------------------

//  const billvalue = Number(prompt(`Zi cat costa ca plateste fratele`));

//  const tip = billvalue >= 50 && billvalue <= 300 ? Number(`${billvalue*15/100}`) : Number(`${billvalue*20/100}`);

//  const calculator = billvalue + tip;

// console.log(`Hi Sir, the bill is ${billvalue}, the tip is ${tip} and your total value is ${calculator}`);1001


// ------------------------------------------- Java Script ES5, ES6+ ESNEXT -------------------------------------------
 