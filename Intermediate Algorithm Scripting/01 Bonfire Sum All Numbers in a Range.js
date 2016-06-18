/* Bonfire: Sum All Numbers in a Range
Difficulty: 2/5

We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between
them.

The lowest number will not always come first.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.max()
Math.min()
Array.reduce()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function sumAll(arr) {
  // Find and set the maximum and minimun between the array.
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  var sum = 0;

  // Create a for loop that will go form the minimun to the maimun and add each number as it iterates.
  for (var i = min; i <= max; i++) {
    sum += i;
  }

  return (sum);
}

sumAll([1, 4]);

// Using Arithmetic progression

function sumAll(arr) {
  var max = Math.max(arr[0],arr[1]);
  var min = Math.min(arr[0], arr[1]);
  return (max - min + 1) * (min + max) / 2;
}

sumAll([1, 4]);
