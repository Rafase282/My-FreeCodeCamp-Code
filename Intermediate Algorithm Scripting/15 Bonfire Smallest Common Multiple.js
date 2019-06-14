/* Bonfire: Smallest Common Multiple
Difficulty: 2/5

Find the smallest number that is evenly divisible by all numbers in the provided range.

The range will be an array of two numbers that will not necessarily be in numerical order.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Smallest Common Multiple

Code by Rafael Rodriguez (rafase282) and Rex Schrader (https://github.com/SaintPeter)
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function smallestCommons(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  const numbers = [];
  for(let i = min; i<= max; i++){
	  numbers.push(i);
  }
  for(let i = max;;i += max){
	if(numbers.every(item => i % item === 0)){
		return i;
    }
  }  
}

smallestCommons([1, 13]);

/* If the array only has two elements then the for loop never gets used and the return value is the product of said numbers. Otherwise, from the third element and until n is the same and the array length check if the reminder of the quotient and the third value of the array is not 0, if it is not 0 then stop loop increases and then we start over. If the reminded was 0 then keep checking until the end of the array. */
