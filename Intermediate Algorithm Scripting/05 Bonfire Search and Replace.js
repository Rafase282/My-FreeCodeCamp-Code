/* Bonfire: Search and Replace
Difficulty: 2/5

Perform a search and replace on the sentence using the arguments provided and return the new
sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to
replace the word 'Book' with the word 'dog', it should be replaced as 'Dog'

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice() String.replace() Array.join()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function replace(str, before, after) {
  // Find index where before is on string

  var index = str.indexOf(before);

  // Check to see if the first letter is uppercase or not
  if (str[index] === str[index].toUpperCase()) {
    // Change the after word to be capitalized before we use it.

    after = after.charAt(0).toUpperCase() + after.slice(1);
  }

  // Now replace the original str with the edited one.
  str = str.replace(before, after);

  return str;
}

replace('A quick brown fox jumped over the lazy dog', 'jumped', 'leaped');


// Another solution I came up with giving it another try

function myReplace(str, before, after) {
  if (before[0] === before[0].toUpperCase()) {
    after = after[0].toUpperCase() + after.substring(1, after.length);
  }

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
