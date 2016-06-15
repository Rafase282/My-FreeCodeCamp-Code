/* Bonfire: Seek and Destroy
Difficulty: 1/5

You will be provided with an initial array (the first argument in the destroyer function), followed
by one or more arguments. Remove all elements from the initial array that are of the same value as
these arguments.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arguments object Array.filter()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

// Using  Array.prototype.slice.call()
function destroyer(arr) {
  var args = Array.prototype.slice.call(arguments).splice(1);
  return arr.filter(function(element) {
    return args.indexOf(element) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Using Array.from()
function destroyer(arr) {
  var args = Array.from(arguments).splice(1);
  return arr.filter((arg) => args.indexOf(arg) === -1);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
