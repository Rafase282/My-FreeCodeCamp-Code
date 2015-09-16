/* Bonfire: Boo who
DIfficulty: 2/5

Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Boolean Objects

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function boo(bool) {
  // Uses the operator typeof to check if is a boolean
  // if yes then return true, if it is another type then return false
  return typeof bool === 'boolean';
}

boo(false);
