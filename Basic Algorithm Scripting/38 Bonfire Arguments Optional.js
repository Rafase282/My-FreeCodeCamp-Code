/* Bonfire: Arguments Optional
Difficulty: 2/5

Create a function that sums two arguments together. If only one argument is provided, return a
function that expects one additional argument and will return the sum.

For example, add(2, 3) should return 5, and add(2) should return a function that is waiting for an
argument so that var sum2And = add(2); return sum2And(3); // 5

If either argument isn't a valid number, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Global Function Object
Arguments object

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function add() {
    var checkNum = function (num) {
        if (typeof num !== 'number')
            return undefined;
        else
            return num;
    };

    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {return a + b;}
    } else {
        return function(arg2) {
            if (a === undefined || arg2 === undefined) {
                return undefined;
            } else {return a + arg2;}
            
        };
    }
}

add('3',4);