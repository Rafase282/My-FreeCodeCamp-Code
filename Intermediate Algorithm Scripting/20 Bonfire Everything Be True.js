/* Bonfire: Everything Be True
DIfficulty: 2/5

Check if the predicate (second argument) returns truthy (defined) for all elements of a collection
(first argument).

For this, check to see if the property defined in the second argument is present on every element of
the collection.

Remember, you can access object properties through either dot notation or [] notation.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Object.hasOwnProperty()
Object.getOwnPropertyNames()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function every(collection, pre) {
  // Create a counter to check how many are true.
  var counter = 0;

  // Check for each object
  for (var c in collection) {
    // If it has the same property or the same property value then add 1
    if (collection[c].hasOwnProperty(pre) || collection[c][pre] == pre) {
      counter++;
    }
  }

  // Outside the loop, check to see if we got true for all of them and return true or false
  if (counter == collection.length) {
    return true;
  } else
    return false;
}

every([{'user': 'Tinky-Winky', 'sex': 'male'}, {'user': 'Dipsy', 'sex': 'male'}, {'user': 'Laa-Laa', 'sex': 'female'}, {'user': 'Po', 'sex': 'female'}], 'sex');
