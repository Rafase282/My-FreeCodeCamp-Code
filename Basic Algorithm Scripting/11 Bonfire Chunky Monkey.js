/* Bonfire: Chunky Monkey
Difficulty: 1/5

Write a function that splits an array (first argument) into groups the length of size (second
argument) and returns them as a multidimensional array.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.push()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/


function chunkArrayInGroups(arr, size) {
  var arr2 = [];
  for (var i = 0; i < arr.length; i += size) {
    arr2.push(arr.slice(i, size + i));
  }
  return arr2;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);
