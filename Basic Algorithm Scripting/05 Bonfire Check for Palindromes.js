/* Bonfire: Check for Palindromes Difficulty 1/5

Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring
punctuation, case, and spacing.

You'll need to remove punctuation and turn everything lower case in order to check for palindromes.

We'll pass strings with varying formats, such as "racecar", "RaceCar", and "race CAR" among others.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.replace() String.toLowerCase()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function palindrome(str) {
  // Use regular expression to replace anythign that is not part of the alphabet.
  str = str.replace(/[^a-zA-Z]/g,'').toLowerCase();
  // Check if the string is the excat same as the string splitted, reversed, and joined back.
  if (str === str.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
}

palindrome("eye");