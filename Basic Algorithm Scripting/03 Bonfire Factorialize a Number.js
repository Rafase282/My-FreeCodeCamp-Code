/* Bonfire: Factorialize a Number
Difficulty: 1/5

Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers
less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120f

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Arithmetic Operators

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

//With recursion
function factorialize(num) {
  if (num < 2) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);
