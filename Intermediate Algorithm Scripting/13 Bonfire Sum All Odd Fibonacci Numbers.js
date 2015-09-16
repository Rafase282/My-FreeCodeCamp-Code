/* Bonfire: Sum All Odd Fibonacci Numbers
Difficulty: 2/5

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a
Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number
is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under
4 are 1, 1, and 3.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

Code by Rafael Rodriguez (rafase282) and Louis Heimel (galaxyhitcher)
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function sumFibs(num) {
  // Create variable to keep Record
  var prevNumber = 0;
  var currNumber = 1;
  var result = 0;

  // Makes sure we do not go over the original number
  while (currNumber <= num) {
    // CHecks for odd fibonacci numbers
    if (currNumber % 2 !== 0) {
      // Add them to the return variable
      result += currNumber;
    }

    // Complete the fibonnaci circle by rotating values.
    var added = currNumber + prevNumber;
    prevNumber = currNumber;
    currNumber = added;
  }

  return result;
}

sumFibs(75025);
