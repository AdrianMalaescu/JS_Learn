// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// Problem:
// We work for a company bulding a smart home thermometer. Our most recent task is this:

// "Given an array of temperatures of one day, calculate the temperature amplitude.
// Keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1) Understanding the problem
// - What is the temp amplitute? Answer difference between highest and lowest temp
// - How to compute the max and min temperatures?
// - What's a sensor error? And what to do?

// 2) Breaking up into sub-problems
// -  How to ignore errors
// - Find max value in temp array
// - Find min value in temp array
// - Substract min from max (amplitude) and return it

// const calcTempAmplitute = function (temps) {
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitude = calcTempAmplitute(temperatures);
// console.log(amplitude);

// Problem 2
// Function should now receive 2 arrays of temps

// 1) Understanding the problem
// - With 2 arrays, should we implement functionality twice? No, just merge two arrays

// 2) Breaking into subproblems
// - Merge 2 arrays

// const calcTempAmplituteNew = function (t1, t2) {
//   const temps = t1.concat(t2);
//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp !== 'number') continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   console.log(max, min);
//   return max - min;
// };

// const amplitudeNew = calcTempAmplituteNew([3, 5, 1], [9, 0, 5]);
// console.log(amplitudeNew);

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Dregrees celsius:')),
    value: 10,
  };

  const kelvin = measurement.value + 273;
  return kelvin;
};

//Using a debuger
console.log(measureKelvin());

const calcTempAmplituteBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

const amplitudeBug = calcTempAmplituteBug([3, 5, 1], [9, 4, 5]);
console.log(amplitudeBug);

// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21ºC in 2 days ... 23ºC in 3 days ..."

// Your tasks:

// 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
// string like the above to the console. Try it with both test datasets.

// 2. Use the problem-solving framework: Understand the problem and break it up
// into sub-problems!

// Test data:
// § Data 1: [17, 21, 23]
// § Data 2: [12, 5, -5, 0, 4]

// GOOD LUCK �

const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
console.log;

const printForecast = function (temperature1) {
  let str = '...';
  for (let i = 0; i < temperature1.length; i++) {
    str += `${temperature1[i]}ºC in ${
      temperature1.indexOf(temperature1[i]) + 1
    } days...`;
  }
  return str;
};
console.log(printForecast(data2));

// 1) Understanding the problem
// - Array transformed to string, separated by...

// 2) Breaking up into sub-problems
// - How to log the first temp. We use a for loop with i++;
// - How to count array current element in a for loop // idenxOf(), and use +1 to match the current day cuz the array starts with 0 count

const printForecastV0 = function (temperature1) {
  for (let i = 0; i < temperature1.length; i++)
    console.log(
      `...${temperature1[i]}ºC in ${
        temperature1.indexOf(temperature1[i]) + 1
      } days`
    );
};
