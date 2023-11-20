"use strict";

// Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

const weekdays = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    open: 0, // Open 24 hours
    close: 24,
  },
};

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],

  // ES6 enhanced object literals
  openingHours,

  // New way of writing methods ES6
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = "20:00", address }) {
    console.log(`Order received ${this.starterMenu[starterIndex]} and this ${this.mainMenu[mainIndex]}
    will be delivered to ${address} at ${time}`);
  },

  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },

  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

const rest = new Map();
rest.set("name", "Classico Italiano");
rest.set(1, "Firenze, Italy");
rest.set(2, "Lisbon, Portugal");

rest
  .set("categories", ["Italian", "Pizzeria", "Vegetarian", "Organic"])
  .set("open", 11)
  .set("close", 23)
  .set(true, "we are open")
  .set(false, "we are closed");

// console.log(rest.get("name"));
// console.log(rest.get(true));
// console.log(rest.get(1));

// console.log(rest);

// const time = 8;
// console.log(rest.get(time > rest.get("open") && time < rest.get("close")));

// console.log(rest.has("categories"));
// rest.delete(2);

// const arr = [1, 2];
// rest.set(arr, "Test");
// rest.set(document.querySelector("h1"), "Heading");
// console.log(rest);
// console.log(rest.size);

// console.log(rest.get(arr));

// const question = new Map([
//   ["question", "What is the best progreaming language in the world?"],
//   [1, "C"],
//   [2, "Java"],
//   [3, "JavaScript"],
//   ["correct", 3],
//   [true, "Correct (bine boss)"],
//   [false, "Mai trage o fisă"],
// ]);

// console.log(question);

// ------------------------------  Convert object to map --------------------------

// console.log(Object.entries(openingHours));
// const hoursMap = new Map(Object.entries(openingHours));
// console.log(hoursMap);

// for (const [key, value] of question) {
//   if (typeof key === "number") console.log(`Answer ${key}: ${value}`);
// }

// --------------------------- Test quiz -----------------------------

// const answer = Number(prompt("Zi sefule"));
// const answer = 3;
// console.log(answer);

// console.log(question.get(question.get("correct") === answer));

// // ----------------------------- Convert map to array ---------------------------

// console.log([...question]);
// console.log(question.entries());
// console.log(question.keys());
// console.log(question.values());
// console.log([...question.keys()]);
// console.log([...question.values()]);

/*

const ordersSet = new Set (['Pasta',
 'Pizza',
 'Pizza', 
 'Risotto',
 'Pasta',
 'Pizza'])

 console.log(ordersSet);

 console.log(ordersSet.size);
 console.log(ordersSet.has('Pizza'));
 console.log(ordersSet.has('Bread'));
 ordersSet.add('Garlic Bread');
 ordersSet.add('Garlic Bread');
 ordersSet.delete('Risotto');

 console.log(ordersSet);

 for (const order of ordersSet) console.log(order);

 // Exemple 

 const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

 const staffUnique = [...new Set (staff)];
 console.log(staffUnique);

 console.log(new Set (['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size);

 console.log(new Set('jonasschmedtmann').size);


if (restaurant.openingHours && restaurant.openingHours.mon)
console.log (restaurant.openingHours.mon.open);

// WITH optional chaining

console.log(restaurant.openingHours?.mon?.open);
console.log(restaurant?.openingHours?.fri?.open);

// Example

const days = ['mon', 'tue','wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days){
  // restaurant.openingHours.day (proper way to write this down)
  const open = restaurant.openingHours[day]?.open ?? `closed`;
  console.log(`On ${day}, we open at ${open}`);
  
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

// Arrays

const users = [{name:'Jonas', email: 'hello@jonas.io'}];
console.log(users[0]?.name ?? 'User array empty');

if (users.length > 0) console.log(users[0].name); else console.log('user array empty');

*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu)
// console.log(item);

// for (const [i, el] of menu.entries()){
//   console.log(`${i + 1}: ${el}`);
// }

// console.log(...[...menu.entries()]);

//   const rest1 = {
//     name: 'Capri',
//     // numGuests: 20,
//     numGuests: 0,

//   };

//   const rest2 = {
//     name: 'La Piazza',
//     owner: 'Giovanni Rossi',
//   };

// OR assignment operator
// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

//nullish assignment operator (null or undefined)
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;

//AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'

// rest1.owner &&= '<ANONYMOUS>';
// rest2.owner &&= '<ANONYMOUS>';

// console.log(rest1);
// console.log(rest2);

// Use ANY data type, return ANY data type, short-circuiting

// console.log(`---------- OR ----------`);

// console.log(3 || 'Jonas');
// console.log('' || 'Jonas');
// console.log(true || 0);
// console.log(undefined || null);

// console.log(undefined || '' || 'Hello' || 23 || null );

// Faulsy values
// let restaurantnumGuests = 0;
// const guests = restaurantnumGuests || 10;
// console.log(guests);

// Nullish: null and undefined (NOT 0 or '');
// const guestsCorrect = restaurantnumGuests ?? 10;
// console.log(guestsCorrect);

// console.log(`---------- AND ----------`);

// console.log(0 && 'Jonas');
// console.log(7 && 'Jonas');

// console.log ('Hello' && 23 && null && 'Jonas');

// Practical example

// if (restaurant.orderPizza) {
//   restaurant.orderPizza('mushrooms', 'spinach');
// }

//   restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// 1) Destructuring

// SPREAD, beacause on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);

//Object
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);

// 2) Functions

// DAMBLAUA MEA

/*
const bigData = [];

const add2 = function (...numbers) {
  bigData.push(...numbers);
};

add2(2, 3);
add2(5, 3, 7, 2);
add2(8, 2, 5, 3, 2, 1, 4);

console.log(bigData);

*/

// Aia pe bune

/*
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(5, 3, 7, 2);
add(8, 2, 5, 3, 2, 1, 4);

const x = [23, 5, 7];
add(...x);

restaurant.orderPizza('mushrooms', 'salam', 'cascaval');
restaurant.orderPizza('mushrooms');
*/

/*
const arr = [7, 8 , 9];
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr);

const newArr = [1, 2, ...arr];
console.log(newArr);

console.log(...newArr);

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

// Join 2 arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

// Iterables: arrays, strings, maps, sets. NOT objects
const str = 'Jonas';
const letters = [...str, '', 'S.'];
console.log(letters);
console.log(...str);
// console.log(`${[...str]} test`);1


//Real world Exemple
const ingredients = [
// prompt('Let\'s make pasta! Ingredient 1?'),
// prompt('Let\'s make pasta! Ingredient 2?'),
// prompt('Let\'s make pasta! Ingredient 3?')
];

restaurant.orderPasta(...ingredients);

// Objects

const newRestaurant = {foundedIn: 1988,...restaurant, founder: 'Guiseppe'};
console.log(newRestaurant);

const restaurantCopy = {...restaurant};
restaurantCopy.name = 'Ristorante Roma';
console.log(restaurantCopy.name);
console.log(restaurant.name);


////////////////////////////////////////////////////
// Destructuring Objects
  // restaurant.orderDelivery({
  //   time:'22:30',
  //   address:'Via del Sole, 21',
  //   mainIndex: 2,
  //   starterIndex: 2,
  // });

  // restaurant.orderDelivery({
  //   address:'Via del Sole, 21',
  //   starterIndex: 1,
  // });

  // const { name, openingHours, categories } = restaurant;
  // console.log(name, openingHours, categories);

  // const {
  //   name: restaurantName,
  //   openingHours: hours,
  //   categories: tags
  // } = restaurant;
  // console.log(restaurantName, hours, tags);

  
  // Default values
  // const { menu = [], starterMenu: starters =[]} = restaurant;
  // console.log (menu, starters);

  // Mutating variables
  // let a = 111;
  // let b = 999;
  // const obj = {a: 23, b: 7, c: 14 };

  // ({a, b} = obj);

  // console.log(a, b);

  // Nested objects

  // const {fri: {open: o, close: c}} = openingHours;
  // console.log(o, c);



// const arr = [2, 3, 4];
// const a = arr [0];
// const b = arr [1];
// const c = arr [2];

// const [x, y, z] = arr;
// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);


// Switching variables

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 4, [5, 6]];
// const [i, ,j] = nested;
// console.log(i, j);

// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// Default values
// const [p=1, q=1, r=1] = [8, 9];
// console.log(p, q, r);

*/

/*

Data Structures, Modern Operators and Strings
Coding Challenge #1

We're building a football betting app (soccer for my American friends �)!
Suppose we get data from a web service about a certain game ('game' variable on
next page). In this challenge we're gonna work with that data.

Your tasks:

1. Create one player array for each team (variables 'players1' and
'players2')

2. The first player in any player array is the goalkeeper and the others are field
players. For Bayern Munich (team 1) create one variable ('gk') with the
goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10
field players

3. Create an array 'allPlayers' containing all players of both teams (22
players)

4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a
new array ('players1Final') containing all the original team1 players plus
'Thiago', 'Coutinho' and 'Perisic'

5. Based on the game.odds object, create one variable for each odd (called
'team1', 'draw' and 'team2')

6. Write a function ('printGoals') that receives an arbitrary number of player
names (not an array) and prints each of them to the console, along with the
number of goals that were scored in total (number of player names passed in)

7. The team with the lower odd is more likely to win. Print to the console which
team is more likely to win, without using an if/else statement or the ternary
operator.

Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'.
Then, call the function again with players from game.scored
GOOD LUCK �

*/

const game = {
  team1: "Bayern Munich",
  team2: "Borrussia Dortmund",
  players: [
    [
      "Neuer",
      "Pavard",
      "Martinez",
      "Alaba",
      "Davies",
      "Kimmich",
      "Goretzka",
      "Coman",
      "Muller",
      "Gnarby",
      "Lewandowski",
    ],
    [
      "Burki",
      "Schulz",
      "Hummels",
      "Akanji",
      "Hakimi",
      "Weigl",
      "Witsel",
      "Hazard",
      "Brandt",
      "Sancho",
      "Gotze",
    ],
  ],
  score: "4:0",
  scored: ["Lewandowski", "Gnarby", "Lewandowski", "Hummels"],
  date: "Nov 9th, 2037",
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

/*

  // ---------------- 1 ------------------------

  // CLASSIC WAY
  // const players1 = game.players[0];
  // const players2 = game.players[1];

  // BETTER ussing nesting
  const [players1, players2] = game.players;

  // ---------------- 2 ------------------------

  const [gk1, ...fieldPlayers1] = players1;
  const [gk2, ...fieldPlayers2] = players2;

  // ----------------- 3 -----------------------

  const allPlayers = [...players1, ...players2];

  // ----------------- 4 -----------------------
  
  const substitutePlayers = ['Thiago', 'Coutinho', 'Perisic'];
  const players1Final = [...players1, ...substitutePlayers];
  
  // ----------------- 5 -----------------------
  
  const {odds: {team1, x: draw, team2}} = game;
  
  // ----------------- 6 -----------------------
  
  
  
  const printGoals = function (...goalkeepers) {
    const marcatori = {};
    goalkeepers.forEach(function (Element2) {marcatori[Element2] = (marcatori[Element2] || 0) + 1; });
    const marcatoriPropArray = Object.getOwnPropertyNames(marcatori);
    const marcatoriValues = Object.values(marcatori);
    for (let i = 0; i < marcatoriPropArray.length; i++){
      console.log(`${marcatoriPropArray[i]} a dat ${marcatoriValues[i]} goluri`);
    }
    // goalkeepers.forEach(Element => console.log(Element));
      console.log(marcatori);

    console.log(`${goalkeepers.length} goals were scored`);  
  };

  // printGoals('Davies', 'Muller', 'Lewandowski','Kimmich');
  printGoals(...game.scored);



  // -------------- 7 ----------------------

  team1 < team2 && console.log(`Team 1 is more likely to win`);
  team1 > team2 && console.log(`Team 2 is more likely to win`);
  team1 == team2 && console.log(`Draw`);
  /*

  /*
  Let's continue with our football betting app! Keep using the 'game' variable from 
before.

Your tasks:

1. Loop over the game.scored array and print each player name to the console, 
along with the goal number (Example: "Goal 1: Lewandowski")

2. Use a loop to calculate the average odd and log it to the console (We already 
studied how to calculate averages, you can go check if you don't remember)

3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:

Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5

Get the team names directly from the game object, don't hardcode them 
(except for "draw"). Hint: Note how the odds and the game objects have the 
same property names 

4. Bonus: Create an object called 'scorers' which contains the names of the 
players who scored as properties, and the number of goals as the value. In this 
game, it will look like this:

{
 Gnarby: 1,
 Hummels: 1,
 Lewandowski: 2
}
GOOD LUCK 



// -------------------------- 1 --------------------------

let goalNumberArray = [];
let playerNameArray = [];

for (const [goalNumber, playerName] of game.scored.entries()){
  console.log(`Goal ${goalNumber + 1}: ${playerName}`);
  goalNumberArray.push(goalNumber);
  playerNameArray.push(playerName);
};

// -------------------------- 2 ---------------------------
let sum = 0;

  // varianta mai simple cu Object.values : const odds = object.values(game.odds) si dupa un for const odd of odds

  for (const teamsOdd of Object.entries(game.odds)){
    sum += teamsOdd[1];
  };
 
  let average = Math.round((sum / Object.keys(game.odds).length)*100)/100;
  console.log(`The odds average is ${average}`);

  // ----------------------- 3 ------------------------------

  // BAD V1 

//   const teamsOddsV1 = Object.values(game.odds);
//   const pobisilities = [game.team1, 'draw', game.team2];


// for (let i = 0; i < pobisilities.length; i++) {
//   console.log(`Odd of victory ${pobisilities[i]}: ${teamsOddsV1[i]}`);
// }


for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr} : ${odd}`);
}


// ------------------------ 4 ----------------------------


// ---------------- V1 -------------------- // Ussing forEach function // One of the best

  const scorers = {};
  game.scored.forEach((item) => {scorers[item] = (scorers[item] || 0) + 1; });
  console.log(scorers);


// ---------------- V2 ------------------- // 

const arr = ["apple", "banana", "banana", "orange", "apple", "banana","avocados"];

const obj = {};

for (let i = 0; i < arr.length; i++) {
  if (obj[arr[i]]) {
    obj[arr[i]]++;
  } else {
    obj[arr[i]] = 1;
  }
}
console.log(obj);


// ------------------- V3 -----------------

const arr2 = ['a', 'b', 'c', 'a', 'c', 'a'];

const obj2 = {};

arr2.forEach((item) => {
  if (!obj2[item]) {
    obj2[item] = 1;
  } else {
    obj2[item]++;
  }
});


// ----------------- V4 ----------------- One of the best
const scorersV2 = {};
for (const player of game.scored) {
  scorersV2[player] ? scorersV2[player]++ : (scorersV2[player] = 1);
}


*/

/*
//Property names
const properties = Object.keys(openingHours);
let openStr = `we are open for ${properties.length} days: `

for (const day of properties){
  openStr += `${day},`
}

console.log(openStr);

// Property Values
const values = Object.values(openingHours);
console.log(values);

const entries = Object.entries(openingHours);

//[Key, value]
for (const [key, {open, close}] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}

*/

const airline = "TAP Air Portugal";

console.log(airline.toLocaleLowerCase());
console.log(airline.toUpperCase());

// Fix capitalozation in the name

const passenger = "JOnAS"; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect = passenger[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing emails

const email = "hello@jonas.io";
const loginEmail = "Hello@Jonas.Io \n";

// const lowerEmail = loginEmail.toLowerCase();
// const trimmedEmail = lowerEmail.trim();
// console.log(trimmedEmail);

// const normalizedEmail = loginEmail.toLowerCase().trim();
// console.log(normalizedEmail);

// // replacing
// const priceGB = "288,97£";
// const priceUS = priceGB.replace("£", "$").replace(",", ".");
// console.log(priceUS);

// const announcement =
//   "All passangers come to barding door 23. Boarding door 21!";

// console.log(announcement.replace("door", "gate"));
// // console.log(announcement.replaceAll("door", "gate"));
// console.log(announcement.replace(/door/g, "gate"));

// // Booleans
// const plane = "Airbus A320neo";
// console.log(plane.includes("A320"));
// console.log(plane.includes("Boeing"));
// console.log(plane.startsWith("Air"));

// if (plane.startsWith("Airbus") && plane.endsWith("neo")) {
//   console.log("Part of the NEW Airbus family");
// }

// // Practice Exercize

// const checkBaggage = function (items) {
//   const baggage = items.toLowerCase();
//   if (baggage.includes("knife") || baggage.includes("gun")) {
//     console.log("You are NOT allowed on board");
//   } else {
//     console.log("Welcome aboard!");
//   }
// };

// checkBaggage("I have a laptop, some foof and a pocket Knife");
// checkBaggage("Socks and camera");
// checkBaggage("Got some snacks and a gun for protection");


console.log('a+very+nice+string'.split('+'));
console.log('Jonas Schmedtmann'.split(' '));

const [firstName, lastName] = 'Jonas Schmedtmann'.split(' ');

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');
console.log(newName);

const capitalizeName = function(name){
  const names = name.split(' ');
  const namesUpper = [];
  for(const n of names) {
  //  namesUpper.push(n[0].toUpperCase() + n.slice(1));
  namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
}

capitalizeName('jessica ann smith davis')
capitalizeName('jonas schmedtmann')

// Padding

const message = 'Go to gate 23!'
console.log(message.padStart(20, '+').padEnd(30, '+'));
console.log('Jonas'.padStart(20, '+').padEnd(30, '+'));


const maskCreditCard = function(number){
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*')
}

console.log(maskCreditCard(43312312312317384));
console.log(maskCreditCard('23123123123123123124747'));

// Repeat 

const message2 = 'Bad waether... All Departures Delayed...';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'<>'.repeat(n)}`);
}

planesInLine(5);
planesInLine(3);
planesInLine(12);


/*


/// Working with strings part 1 ////

const airline = "TAP Air Portugal";
const plane = "A320";

// console.log(plane[0]);
// console.log(plane[1]);
// console.log(plane[2]);
// console.log('B737'[0]);

// console.log(airline.length);
// console.log('B737'.length);

// console.log(airline.indexOf('r'));
// console.log(airline.lastIndexOf('r'));
// console.log(airline.indexOf('Portugal'));

// console.log(airline.slice(4));
// console.log(airline.slice(4, 7));

console.log(airline.slice(0, airline.indexOf(" ")));
console.log(airline.slice(airline.lastIndexOf(" ") + 1));

console.log(airline.slice(-2));
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === "B" || s === "E") console.log("You got the middle seat :(");
  else console.log("Bravo tata");
};

checkMiddleSeat("11B");
checkMiddleSeat("23C");
checkMiddleSeat("3E");

console.log(new String("jonas"));
console.log(typeof new String("jonas"));

console.log(typeof new String("jonas").slice(-1));

*/

// Coding Challenge #3

/* 
Let's continue with our football betting app! This time, we have
a map with a log of the events that happened during the game.
The values are the events themselves, and the keys are
the minutes in which each event happened (a football game has 90 minutes plus some extra time).

1. Create an array 'events' of the different game events that happened (no duplicates)
2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
3. Print the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
4. Loop over the events and log them to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
      [FIRST HALF] 17: ⚽️ GOAL

GOOD LUCK 😀
*/

// const gameEvents = new Map([
//   [17, "⚽️ GOAL"],
//   [36, "🔁 Substitution"],
//   [47, "⚽️ GOAL"],
//   [61, "🔁 Substitution"],
//   [64, "🔶 Yellow card"],
//   [69, "🔴 Red card"],
//   [70, "🔁 Substitution"],
//   [72, "🔁 Substitution"],
//   [76, "⚽️ GOAL"],
//   [80, "⚽️ GOAL"],
//   [92, "🔶 Yellow card"],
// ]);

// // 1.
// const events = [...new Set(gameEvents.values())];
// console.log(events);

// // 2.
// gameEvents.delete(64);

// // 3.
// const time = [...gameEvents.keys()].pop();

// console.log(
//   `An event happend, on average every ${time / gameEvents.size} minutes`
// );

// // 4.

// for (const [min, event] of gameEvents) {
//   const half = min <= 45 ? "FIRST" : "SECOND";
//   console.log(`[${half} HALF] ${min}: ${event}`);

/* 
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.

The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.


THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable 
  calculate_AGE
delayed_departure

SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅

HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!

Afterwards, test with your own test data!

GOOD LUCK 😀


document.body.append(document.createElement("textarea"));
document.body.append(document.createElement("button"));

document.querySelector("button").addEventListener("click", function () {
  const text = document.querySelector("textarea").value;
  const rows = text.split("\n");
  console.log(rows);

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLocaleLowerCase().trim().split("_");
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${"✅".repeat(i + 1)}`);
  }
});

*/

const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";
