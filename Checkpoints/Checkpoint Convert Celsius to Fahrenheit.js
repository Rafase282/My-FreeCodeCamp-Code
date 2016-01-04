/* Checkpoint: Convert Celsius to Fahrenheit

The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable `celsius` representing a temperature in Celsius. Create a variable `fahrenheit` and apply the algorithm to assign it the corresponding temperature in Fahrenheit.

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function convert(celsius) {
  // Only change code below this line
  var fahrenheit = (celsius * (9 / 5)) + 32;

  // Only change code above this line
  if (typeof fahrenheit !== 'undefined') {
    return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

// Change the inputs below to test your code
convert(30);
