/* Bonfire: Sorted Union
Difficulty: 2/5

Write a function that takes two or more arrays and returns a new array of unique values in the order
of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but
with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be
sorted in numerical order.

Check the assertion tests for examples.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function unite(arr1, arr2, arr3) {
  // Creates an empty array to store our final result.
  var finalArray = [];

  // Loop through the arguments object to truly made the program work with two or more arrays
  // instead of 3.
  for (var i = 0; i < arguments.length; i++) {
    var arrayArguments = arguments[i];

    // Loops through the array at hand
    for (var j = 0; j < arrayArguments.length; j++) {
      var indexValue = arrayArguments[j];

      // Checks if the value is already on the final array.
      if (finalArray.indexOf(indexValue) < 0) {
        finalArray.push(indexValue);
      }
    }
  }

  return finalArray;
}

//unite([1, 2, 3], [5, 2, 1, 4], [2, 1]); //[ 1, 2, 3, 5, 4 ]
unite([1, 3, 2], [1, [5]], [2, [4]]); //[ 1, 3, 2, [ 5 ], [ 4 ] ]
