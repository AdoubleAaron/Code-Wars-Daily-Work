//We need a function that can transform a string into a number. What ways of achieving this do you know?

//Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.



//const stringToNumber = function(str){
//    return Number(str)
//}

//console.log(typeof str)




// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20

// Note: if there is nothing to sum, the sum is default to 0.



function positiveSum(arr) {
    let total = 0;    
    for (i = 0; i < arr.length; i++) {    
      if (arr[i] > 0) {                   
        total += arr[i];                  
      }
    }
    return total;                         
  }