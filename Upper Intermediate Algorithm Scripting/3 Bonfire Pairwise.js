/* Bonfire: Pairwise
Difficulty 3/5

Return the sum of all indices of elements of 'arr' that can be paired with one other element to form
a sum that equals the value in the second argument 'arg'. If multiple sums are possible, return the
smallest sum. Once an element has been used, it cannot be reused to pair with another.

For example, pairwise([1, 4, 2, 3, 0, 5], 7) should return 11 because 4, 2, 3 and 5 can be paired
with each other to equal 7.

pairwise([1, 3, 2, 4], 4) would only equal 1, because only the first two elements can be paired to
equal 4, and the first element has an index of 0!

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function pairwise(arr, arg) {
  // Create empty array to keep the arrays we will add.
  var index = [];

  // Loop to check the first number.
  for (var a in arr) {
    // temporal first number.
    var temp = arr[a];

    // Second loop to check against the first number.
    for (var i = 1; i < arr.length; i++) {
      // temporal secodn number.
      var temp2 = arr[i];

      // Key element, this check to make sure that the numbers add to arg
      // also that the second index is greater than the first, and that neither
      // of those indices are already on the array.
      if (temp + temp2 === arg && i > a && index.indexOf(+a) === -1 && index.indexOf(+i) === -1) {
        // if true then add both indices as integers then stop checking to avoid repeats.
        index.push(+a, +i);
        break;
      }
    }
  }

  // After the two loops are done, check if index is empty to return 0
  // or if it is not, then use Array.reduce(callbackFunc) to returnt he sum
  // of the numbers.
  if (index.length >= 1) {
    var addAll = function(a, b) {
      return a + b;
    };

    return index.reduce(addAll);
  } else
    return 0;
}

pairwise([1, 1, 1], 2);
