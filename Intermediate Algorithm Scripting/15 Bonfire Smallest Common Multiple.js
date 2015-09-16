/* Bonfire: Smallest Common Multiple
Difficulty: 2/5

Find the smallest number that is evenly divisible by all numbers in the provided range.

The range will be an array of two numbers that will not necessarily be in numerical order.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

Code by Rafael Rodriguez (rafase282) and Rex Schrader (https://github.com/SaintPeter)
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function smallestCommons(arr) {
  // Sort array from greater to lowest
  // This line of code was from Adam Doyle (http://github.com/Adoyle2014)
  arr.sort(function(a, b) {
    return b - a;
  });

  // Create new array and add all values from greater to smaller from the original array.
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }

  // Variables needed declared outside the loops.
  var quot = 0;
  var loop = 1;
  var n;

  // run code while n is not the same as the array length.
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 2; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }

    loop++;
  } while (n !== newArr.length);

  return quot;
}

smallestCommons([1, 13]);

/* If the array only has two elements then the for loop never gets used and the return value is the product of said numbers. Otherwise, from the third element and until n is the same and the array length check if the reminder of the quotient and the third value of the array is not 0, if it is not 0 then stop loop increases and then we start over. If the reminded was 0 then keep checking until the end of the array. */
