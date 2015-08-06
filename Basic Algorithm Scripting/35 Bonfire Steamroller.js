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
  // I'm a steamroller, baby
  return arr;
}

steamroller([1, [2], [3, [[4]]]]);

/* Code from Max Helmetag (https://github.com/mhelmetag)

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

drop([1, 2, 3], function(n) {return n < 3; });
*/