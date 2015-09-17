/* Bonfire: Symmetric Difference
Difficulty: 4/5

Create a function that takes two or more arrays and returns an array of the symmetric difference of the provided arrays.

The mathematical term symmetric difference refers to the elements in two sets that are in either the first or second set, but not in both.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.reduce()

Code by Rafael Rodriguez & @guyjoseph
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function sym() {

  // Convert the argument object into a proper array
  var args = Array.prototype.slice.call(arguments);

  // Return the symmetric difference of 2 arrays
  var getDiff = function(arr1, arr2) {

    // Returns items in arr1 that don't exist in arr2
    function filterFunction(arr1, arr2) {
      return arr1.filter(function(item) {
        return arr2.indexOf(item) === -1;
      });
    }

    // Run filter function on each array against the opposite then get unique values
    return filterFunction(arr1, arr2)
      .concat(filterFunction(arr2, arr1))
      .filter(function(item, idx, arr) {
        return arr.indexOf(item) === idx;
      });
  };

  // Reduce all arguments getting the difference of them
  return args.reduce(getDiff, []);
}

sym([1, 2, 3], [5, 2, 1, 4]);
