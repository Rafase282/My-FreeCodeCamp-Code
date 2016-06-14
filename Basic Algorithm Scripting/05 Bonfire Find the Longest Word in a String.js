/* Bonfire: Find the Longest Word in a String
Difficulty 1/5

Return the length of the longest word in the provided sentence.

Your response should be a number.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.split() String.length

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function findLongestWord(str) {
  return str.split(' ').sort((curr, next)=> curr.length < next.length)[0].length;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
