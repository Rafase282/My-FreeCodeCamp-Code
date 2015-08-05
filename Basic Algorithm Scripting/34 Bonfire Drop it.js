/* Bonfire: Drop it
Difficulty: 2/5

Drop the elements of an array (first argument), starting from the front, until the predicate (second
argument) returns true.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object
Array.shift()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function drop(arr, func) {
  // Drop them elements.
  return arr;
}

drop([1, 2, 3], function(n) {return n < 3; });