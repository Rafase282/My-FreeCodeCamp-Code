/* Bonfire: Steamroller
Difficulty: 2/5

Flatten a nested array. You must account for varying levels of nesting.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.isArray()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function steamroller(arr) {
  var flattenedArray = [];

  // Create function that adds an element if it is not an array.
  // If it is an array, then loops through it and uses recursion on that array.
  var flatten = function(arg) {
    if (!Array.isArray(arg)) {
      flattenedArray.push(arg);
    } else {
      for (var a in arg) {
        flatten(arg[a]);
      }
    }
  };

  // Call the function for each element in the array
  arr.forEach(flatten);
  return flattenedArray;
}

steamroller([1, [2], [3, [[4]]]]);
