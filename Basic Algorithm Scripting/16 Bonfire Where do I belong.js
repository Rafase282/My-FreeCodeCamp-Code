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

function getIndexToIns(arr, num) {
  // sort and find right index
  var index = arr.sort((curr, next) => curr > next)
    .findIndex((currNum)=> num <= currNum);
  // Returns proper answer
  return index === -1 ? arr.length : index;
}

getIndexToIns([40, 60], 500);
