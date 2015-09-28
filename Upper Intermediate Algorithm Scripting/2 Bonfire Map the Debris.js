/* Bonfire: Map the Debris
Difficulty: 3/5

Return a new array that transforms the element's average altitude into their orbital periods.

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Math.pow()

Code by Rafael Rodriguez & https://github.com/ozydesign
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var i = 0; i < arr.length; i++) {
    newArr.push(getOrbPeriod(arr[i]));
  }

  return newArr;
}

orbitalPeriod([{
  name: 'sputnik',
  avgAlt: 35873.5553
}]);
