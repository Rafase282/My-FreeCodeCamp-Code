/* Bonfire: Return Largest Numbers in Arrays
Difficulty: 1/5

Return an array consisting of the largest number from each provided sub-array. For simplicity, the
provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array
syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal
statement when comparing arrays.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function largestOfFour(arr) {
  // go throw each array and reduce or sort in descending order and return index 0
  return arr.map((list) => list.reduce((a, b) => a > b ? a : b));
}

largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [32, 35, 37, 39],
  [1000, 1001, 857, 1]
]);
