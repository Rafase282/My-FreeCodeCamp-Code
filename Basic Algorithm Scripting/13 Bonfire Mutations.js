/* Bonfire: Mutations
Difficulty: 1/5

Return true if the string in the first element of the array contains all of the letters of the
string in the second element of the array.

For example, ['hello', 'Hello'], should return true because all of the letters in the second string
are present in the first, ignoring case.

The arguments ['hello', 'hey'] should return false because the string 'hello' does not contain a
'y'.

Lastly, ['Alien', 'line'], should return true because all of the letters in 'line' are present in
'Alien'.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function mutation(arr) {
  var str = arr[0].toLowerCase().split('');
  var match = arr[1].toLowerCase().split('');
  return match.every(function(char){
    return str.indexOf(char) !== -1;
  });
}

mutation(["hello", "hey"]);
