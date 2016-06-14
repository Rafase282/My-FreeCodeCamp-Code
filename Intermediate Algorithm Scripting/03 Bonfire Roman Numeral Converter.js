/* Bonfire: Roman Numeral Converter
Difficulty: 2/5

Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.splice() Array.indexOf() Array.join()

Code by Rana Amrit Parth
ramrit9@gmail.com
http://www.freecodecamp.com/ranaamritparth
*/

var numeralCodes = [["","I","II","III","IV","V","VI","VII","VIII","IX"],         // Ones
                    ["","X","XX","XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],   // Tens
                    ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"],          //Hundreds
                    ["","M","MM","MMM"]];        // Thousands

function convertToRoman(num) {
  var numeral = "";
  var digits = num.toString().split('').reverse();
  for (var i=0; i < digits.length; i++){
    numeral = numeralCodes[i][parseInt(digits[i])] + numeral;
  }
  return numeral;
}

convertToRoman(36);
