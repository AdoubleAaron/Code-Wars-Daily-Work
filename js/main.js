//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.



//const stringToNumber = function(str){
//    return Number(str)
//}

//console.log(typeof str)




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



// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



//   function doubleChar(str){
//     let word = ""
//     for(i = 0; i < str.length; i++){
//       word = word + str[i] + str[i]

//     }
//     return word
//   }




// while loops 

// let count = 0 

// while(count < 5){
//   console.log(count)
//   count ++
// }



// convert number to reversed array of digits 
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// function digitize(n) {
//   return String(n).split('').map(Number).reverse()
// }


// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.
// start with let summation = function (num)





// let summation = function (num) { 
//   let result = 0;
//   for (let i = 1; i <= num; i++) {
//     result += i;
//   }
  
//   return result;
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


function countSheeps(arrayOfSheeps){
    let num = 0
    for (let i = 0;i < arrayOfSheeps.length; i++ )
    if (arrayOfSheeps[i] == true)
    num++

    return num
}







