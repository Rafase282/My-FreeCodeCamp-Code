/* Bonfire: Diff Two Arrays
Difficulty: 2/5

Compare two arrays and return a new array with any items not found in both of the original arrays.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators
String.slice()
Array.filter()
Array.indexOf()
String.concat()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function diff(arr1, arr2) {
  // Same, same; but different.
  var newArr = arr1.concat(arr2);

  function check(item) {
    if (arr1.indexOf(item) === -1 || arr2.indexOf(item) === -1) {
      return item;
    }
  }

  return newArr.filter(check);
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);
