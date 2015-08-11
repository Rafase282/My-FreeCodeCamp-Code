/* Bonfire: Make a Person
Difficulty: 3/5

Fill in the object constructor with the methods specified in the tests.

Those methods are getFirstName(), getLastName(), getFullName(), setFirstName(first),
setLastName(last), and setFullName(firstAndLast).

All functions that take an argument have an arity of 1, and the argument will be a string.

These methods must be the only available means for interacting with the object.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Closures
Details of the Object Model

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

var Person = function(firstAndLast) {
	// Instead of creating new functions, create them using this
    
    this.fullName = firstAndLast;
    var arr = this.fullName.split(' ');
    
    this.getFirstName = function() {
        return arr[0];
    };
    this.getLastName = function() {
        return arr[1];
    };
    this.getFullName = function() {
        return firstAndLast;
    };
    this.setFirstName = function(first) {
        arr[0] = first;
    };
    this.setLastName = function(last) {
        arr[1] = last;
    };
    this.setFullName = function(firstAndLast) {
        fullname = firstAndLast;
    };
};

var bob = new Person('Bob Ross');
bob.getFullName();