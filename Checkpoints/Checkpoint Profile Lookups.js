/* Profile Lookup

We have an array of objects representing different people in our contacts lists.

A lookUp function that takes firstName and a property (prop) as arguments has been pre-written for you.

The function should check if firstName is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If firstName does not correspond to any contacts then return "No such contact"

If prop does not correspond to any valid properties then return "No such property"



Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

//Setup
var contacts = [{
  "firstName": "Akira",
  "lastName": "Laine",
  "number": "0543236543",
  "likes": ["Pizza", "Coding", "Brownie Points"]
}, {
  "firstName": "Harry",
  "lastName": "Potter",
  "number": "0994372684",
  "likes": ["Hogwarts", "Magic", "Hagrid"]
}, {
  "firstName": "Sherlock",
  "lastName": "Holmes",
  "number": "0487345643",
  "likes": ["Intriguing Cases", "Violin"]
}, {
  "firstName": "Kristian",
  "lastName": "Vos",
  "number": "unknown",
  "likes": ["Javascript", "Gaming", "Foxes"]
}];


function lookUp(firstName, prop) {
  // Only change code below this line
  var answer = "No such contact";
  contacts.some(function(arg) {
    if (arg.firstName === firstName && arg.hasOwnProperty(prop) === true) {
      answer = arg[prop];
    } else if (arg.hasOwnProperty(prop) === false) {
      answer = "No such property";
    }
  });
  return answer;
  // Only change code above this line
}

// Change these values to test your function
lookUp("Kristian", "lastName");
