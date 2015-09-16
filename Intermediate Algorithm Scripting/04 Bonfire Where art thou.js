/* Bonfire: Where art thou
Difficulty: 1/5

Make a function that looks through a list (first argument) and returns an array of all objects that
have equivalent property values (second argument).

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Object Object.hasOwnProperty() Object.keys()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function where(collection, source) {
  var arr = [];
  var keys = Object.keys(source);

  // Filter array and remove the ones that do not have the keys from source.
  arr = collection.filter(function(obj) {
    //Use the Array method every() instead of a for loop to check for every key from source.
    return keys.every(function(key) {
      // Check if the object has the property and the same value.
      return obj.hasOwnProperty(key) && obj[key] === source[key];
    });
  });

  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
