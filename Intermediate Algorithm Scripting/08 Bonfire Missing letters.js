/* Bonfire: Missing letters
Difficulty: 2/5

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function fearNotLetter(str) {
  // Create our variables.
  var firstCharacter = str.charCodeAt(0);
  var valueToReturn = '';
  var secondCharacter = '';

  // Function to find the missing letters
  var addCharacters = function(a, b) {
    while (a - 1 > b) {
      b++;
      valueToReturn += String.fromCharCode(b);
    }

    return valueToReturn;
  };

  // Check if letters are missing in between.
  for (var index = 1; index < str.length; index++) {
    secondCharacter = str.charCodeAt(index);

    // Check if the diference in code is greater than one.
    if (secondCharacter - firstCharacter > 1) {
      // Call function to missing letters
      addCharacters(secondCharacter, firstCharacter);
    }

    // Switch positions
    firstCharacter = str.charCodeAt(index);
  }

  // Check whether to return undefined or the missing letters.
  if (valueToReturn === '')
    return undefined;
  else
    return valueToReturn;
}

fearNotLetter('abce');
