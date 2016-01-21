/* Bonfire: Finders Keepers
Difficulty 2/5

Create a function that looks through an array (first argument) and returns the first element in the
array that passes a truth test (second argument).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.filter()

Code by Rafael Rodriguez & Ronald (https://github.com/ronstarcool)
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

// Using for loop
function find(arr, func) {
  // Make num undefined by default
  var num;

  // Loop thorugh the array and use the function to check
  for (var a = 0; a < arr.length; a++) {
    if (func(arr[a])) {
      // Store the first case and break the loop
      num = arr[a];
      return num;
    }
  }

  // otherwise return undefined
  return num;
}

find([1, 2, 3, 4], function(num) {
  return num % 2 === 0;
});

// Using Arr.filter()

function find(arr, func) {
  // filter the provide array by the function provided and return only the first element.
  return arr.filter(func)[0];
}

find([1, 2, 3, 4], function(num){ return num % 2 === 0; });
