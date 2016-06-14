/* Bonfire: Slasher Flick
Difficulty: 1/5

Return the remaining elements of an array after chopping off n elements from the head.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.slice() Array.splice()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

// For Modifying the original array use splice, slice if you don't want to modify the original array.
function slasher(arr, howMany) {
  return arr.slice(howMany);
}

slasher([1, 2, 3], 2);
