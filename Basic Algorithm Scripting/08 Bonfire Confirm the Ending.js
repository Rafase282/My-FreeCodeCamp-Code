/* Bonfire: Confirm the Ending
Difficulty: 1/5

Check if a string (first argument) ends with the given target string (second argument).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.substr()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function end(str, target) {
  if (str.substr(-target.length) === target)
    return true;
  else
    return false;
}

end('Bastian', 'n');
