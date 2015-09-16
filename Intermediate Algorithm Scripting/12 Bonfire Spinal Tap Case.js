/* Bonfire: Spinal Tap Case
Difficulty: 2/5

Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp String.replace()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, '$1 $2');

  // Replace space and underscore with -
  return str.replace(regex, '-').toLowerCase();
}

spinalCase('thisIsSpinalTap');

// http://stackoverflow.com/questions/18379254/regex-to-split-camel-case
