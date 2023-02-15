//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//const stringToNumber = function(str){
//    return Number(str)
//}
//or 
//function numberToString(num) {
//     return num.toString()
 
// }






// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.


// function positiveSum(arr) {
//     let total = 0;    
//     for (i = 0; i < arr.length; i++) {    
//       if (arr[i] > 0) {                   
//         total += arr[i];                  
//       }
//     }
//     return total;                         
//   }







// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//Start with function doubleChar(str)


//   function doubleChar(str){
//     let word = ""
//     for(i = 0; i < str.length; i++){
//       word = word + str[i] + str[i]

//     }
//     return word
//   }




// convert number to reversed array of digits 
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//      return String(n).split('').map(Number).reverse()
// }






// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// start with let summation = function (num)

// let summation = function(num){
//     let result = 0
//     for(let i = 0;i <= num;i++){
//         result += i 
//     } 
//     return result
// }






// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

// var min = function(list){
//     return Math.min.apply(null,list);
// }

// var max = function(list){
//     return Math.max.apply(null,list);
// }







// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.


// function countSheeps(arrayOfSheeps){
//     let num = 0
//     for (let i = 0;i < arrayOfSheeps.length; i++ )
//     if (arrayOfSheeps[i] == true)
//     num++

//     return num
// }





// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.
// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.
// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.
// Write a code that gives out the total amount for different days(d).


// function baseCost(days, rate) {
//     return days * rate;
//   }
  
//   function discountRate(days) {
//     if ( days >= 7 ) {
//       return 50;
//     }
//     else if ( days >= 3 ) {
//       return 20;
//     }
//     else {
//       return 0;
//     }
//   }
  
//   function rentalCarCost(days) {
//     return baseCost(days, 40) - discountRate(days);
//   }







// You ask a small girl,"How old are you?" She always says, "x years old", where x is a random number between 0 and 9.

// Write a program that returns the girl's age (0-9) as an integer.

// Assume the test input string is always a valid string. For example, the test input may be "1 year old" or "5 years old". The first character in the string is always a number.


// function getAge(inputString){
//     return parseInt(inputString);
// }






// Given an array of integers your solution should find the smallest integer.

// For example:

// Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345
// You can assume, for the purpose of this kata, that the supplied array will not be empty.

// class SmallestIntegerFinder {
//     findSmallestInt(args) {
//       return Math.min(...args)
//     }
//   }


// const StringToNum = function toNumber(str){
//     return Number(str)
// }







// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

// Example:
// n= 5, m=5: 25
// n=-5, m=5:  0



// function paperwork(n, m) {
//     if (m < 0 || n < 0) {
//       return 0;
//     }
//     return m * n;
//   }



// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"


// function areYouPlayingBanjo(name) {
//   if (name[0] == 'R' || name[0] == 'r') { 
//     return name + " plays banjo";
//   }else{
//   return name + " does not play banjo";
// }
// }



// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.



// function testEven(n) {
//   //Your awesome code here!
// if(n % 2==0){
//   return true
// }else{
//   return false
// }
// }


// Create a function with two arguments that will return an array of the first n multiples of x.
// Assume both the given number and the number of times to count will be positive numbers greater than 0.
// Return the results as an array or list ( depending on language ).    
// 

// function countBy(x, n){
//     let z = []
//     for( let i = 0; i <= n; i++){
//         z.push(x*i)
//     }
//     return z
// }




// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

// function cockroachSpeed(s) {
//     //Good Luck!
//     return Math.floor(s*27.777778)
//   }



// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'
// 'word'   =>  'drow'

// function solution(str){
//   return str.split('').reverse().join('')
// }





// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!


// smash = function (words) {
//   return words.join(" ");
// };





// function 2-squaring an argument
// Now you have to write a function that takes an argument and returns the square of it.


// let square = function (num){
//   return num*num
// }





// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.


// function findAverage(array) {
//   let num = 0 
//   for(let i =0; i < array.length; i++){
//     num += array[i]
//   }
//   if (array.length === 0){
//     return 0
//   }else{
//     return num / array.length
//   }
// }




// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.



// function squareSum(numbers){
//   var result = 0;
//   for (var i = 0; i < numbers.length; i++) {
//     result += (numbers[i] * numbers[i]);
//   }
//   return result;
// }





// Is the string uppercase?
// Task
// Create a method to see whether the string is ALL CAPS.

// String.prototype.isUpperCase = function() {
//   return this.toUpperCase() === this.toString();
// }





// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.

// function repeatStr (n, s) {
//     return s.repeat(n);
//   }





// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.



// function findMultiples(int,limit){
//     let result = []
    
//     for (let i = int; i<=limit ; i+=int)
//       result.push(i)
      
//     return result
//   }




// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):



// function sumStr(a,b){
//     let result = +a + +b
//     return result.toString()
// }




