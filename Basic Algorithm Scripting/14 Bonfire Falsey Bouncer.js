/* Bonfire: Falsey Bouncer
Difficulty: 1/5

Remove all falsey values from an array.

Falsey values in javascript are false, null, 0, "", undefined, and NaN.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects Array.filter()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function bouncer(arr) {
  function isTruthy(arg) {
    return Boolean(arg);
  }

  var filteredArray = arr.filter(isTruthy);
  return filteredArray;
}

bouncer([7, 'ate', '', false, 9]);
