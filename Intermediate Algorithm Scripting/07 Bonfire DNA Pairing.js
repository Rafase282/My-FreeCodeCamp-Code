/* Bonfire: DNA Pairing
Difficulty: 2/5

The DNA strand is missing the pairing element. Match each character with the missing element and
return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.push()
String.split()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/
/**
 * [pairElement DNA pairs]
 * @param  {[type]} str [string of letters]
 * @return {[type]}  array of array of pairs   [description]
 */
function pairElement(str) {
  //write an object to show pairs.
  var pairs = {'A':'T','T':'A','G':'C','C':'G'};
  //empty array to push
  var arr = [];
  //decalre variables at top of function
  var i = 0;
  //loop the string
  for (i; i < str.length; i+=1){
    //push str[i] + it's matching pair from object as an array.
    arr.push([str[i],pairs[str[i]]]);
  }
  //return array
  return arr;
}

pairElement("GCG");
//github ryanbas21
//ryan basmajian
