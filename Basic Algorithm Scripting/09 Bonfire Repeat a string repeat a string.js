/* Bonfire: Repeat a string repeat a string
Difficulty: 1/5

Repeat a given string (first argument) n times (second argument). Return an empty string if n is a
negative number.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global String Object

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function repeat(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

repeat('abc', 3);
