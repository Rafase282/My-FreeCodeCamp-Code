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
	// Convert from string to array of words separated by space.
	var words = str.split(' ');
  	var maxLength = 0;

  	// Loop through the array.
  	for(var i = 0; i < words.length; i++) {
  		// Check for the longest word comparing with the previous
  		// then sote the new longest word.
  		if (words[i].length > maxLength) {
  			maxLength = words[i].length;
  		}
  	}
  
  return maxLength;
}

findLongestWord('The quick brown fox jumped over the lazy dog');