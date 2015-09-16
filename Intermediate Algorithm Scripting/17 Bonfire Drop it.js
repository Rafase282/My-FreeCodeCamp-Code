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

This code no longer works after tests update.
function drop(arr, func) {
  // Using Array.protptype.filter() which makes it pretty easy.
  return arr.filter(func);
}
drop([1, 2, 3], function(n) {return n < 3; });
*/

// Code from Max Helmetag (https://github.com/mhelmetag)

function drop(arr, func) {
  // Drop them elements.
  var times = arr.length;
  for (var i = 0; i < times; i++) {
    if (func(arr[0])) {
      break;
    } else {
      arr.shift();
    }
  }

  return arr;
}

drop([1, 2, 3], function(n) {
  return n < 3;
});
