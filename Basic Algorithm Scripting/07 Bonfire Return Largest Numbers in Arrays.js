/* Bonfire: Return Largest Numbers in Arrays
Difficulty: 1/5

Return an array consisting of the largest number from each provided sub-array. For simplicity, the
provided array will contain exactly 4 sub-arrays.

Remember, you can iterate through an array with a simple for loop, and access each member with array
syntax arr[i] .

If you are writing your own Chai.js tests, be sure to use a deep equal statement instead of an equal
statement when comparing arrays.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Comparison Operators

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function largestOfFour(arr) {
  var results = [];
  // Loop through the arguments
  for (var n in arr) {
  	// Important: Make sure this is inside the loop to avoid errors
  	var largestNumber = 0;
  	for (var sb in arr[n]) {
  		// Check a two dimensional array
  		// From array in arg n, check if indice is greater than current largest number
  		if (arr[n][sb] > largestNumber) {
  			// Save the value
  			largestNumber = arr[n][sb];
  		}
  	}
    results[n] = largestNumber;
}
  return results;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]);