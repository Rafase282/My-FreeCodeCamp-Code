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

// this code no longer works as per the new version.
function where(collection, source) {
  var arr = [];
  for (var ob in collection) {
    if (collection[ob][Object.keys(source)] === source[Object.keys(source)]) {
      arr.push(collection[ob]);
    }

  }

  return arr;
}

where([{ first: 'Romeo', last: 'Montague' }, { first: 'Mercutio', last: null }, { first: 'Tybalt', last: 'Capulet' }], { last: 'Capulet' });
