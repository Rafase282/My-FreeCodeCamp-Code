/* Bonfire: Where do I belong
Difficulty: 1/5

Return the lowest index at which a value (second argument) should be inserted into a sorted array
(first argument).

For example, where([1,2,3,4], 1.5) should return 1 because it is greater than 1 (0th index), but
less than 2 (1st index).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.sort()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function where(arr, num) {
  // Sort alphabetically
  arr.sort(function(a, b) {
    return a - b;
  });

  // Check for each element if it is greater than num and returnt he index if it is.
  for (var a = 0; a < arr.length; a++) {
    if (arr[a] >= num)
      return parseInt(a);
  }

  return arr.length;
}

where([40, 60], 50);
