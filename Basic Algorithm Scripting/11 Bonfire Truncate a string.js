/* Bonfire: Truncate a string
Difficulty: 1/5

Truncate a string (first argument) if it is longer than the given maximum string length (second
argument). Return the truncated string with a '...' ending.

Note that the three dots at the end add to the string length.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.slice()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function truncate(str, num) {
	// Create a variable to store the truncated string
	var truncd = '';
	// If the string needs to be truncated then slice and add the dots.
	if (str.length > num) {
		// num-3 because the dots we add coutns for the test.
		truncd = str.slice(0,num-3) + '...';
		return truncd;
	}
	return str;
}

truncate('A-tisket a-tasket A green and yellow basket', 11);