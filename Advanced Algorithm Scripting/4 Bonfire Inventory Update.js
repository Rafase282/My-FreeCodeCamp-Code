/* Bonfire: Inventory Update
Difficulty: 4/5

Compare and update inventory stored in a 2d array against a second 2d array of a fresh delivery. Update current inventory item quantity, and if an item cannot be found, add the new item and quantity into the inventory array in alphabetical order.

Remember to use Read-Search-Ask if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Array Object

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function inventory(arr1, arr2) {
  // All inventory must be accounted for or you're fired!
  return arr1;
}

// Example inventory lists
var curInv = [
  [21, 'Bowling Ball'],
  [2, 'Dirty Sock'],
  [1, 'Hair Pin'],
  [5, 'Microphone']
];

var newInv = [
  [2, 'Hair Pin'],
  [3, 'Half-Eaten Apple'],
  [67, 'Bowling Ball'],
  [7, 'Toothpaste']
];

inventory(curInv, newInv);
