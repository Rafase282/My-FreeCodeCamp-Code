/* Stand in line

In Computer Science a queue is an abstract Data Structure where items are kept in order. New items can be added at the back of the queue and old items are taken off from the front of the queue.

Write a function queue which takes an array (arr) and a number (item) as arguments. Add the number to the end of the array, then remove the first element of array. The queue function should then return the element that was removed.

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function queue(arr, item) {
  // Your code here
  arr.push(item);
  return arr.shift();; // Change this line
}
