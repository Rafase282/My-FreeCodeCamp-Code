/* Bonfire: Sum All Odd Fibonacci Numbers
Difficulty: 2/5

Return the sum of all odd Fibonacci numbers up to and including the passed number if it is a
Fibonacci number.

The first few numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8, and each subsequent number
is the sum of the previous two numbers.

As an example, passing 4 to the function should return 5 because all the odd Fibonacci numbers under
4 are 1, 1, and 3.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Remainder

Code by Rafael Rodriguez (rafase282) and Louis Heimel (galaxyhitcher)
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function sumFibs(num) {
    var prev = 0;
    var curr = 1;
    var res = 0;
    while (curr <= num) {
        if (curr%2 !== 0) {
            res += curr;
        }
        var temp = curr + prev;
        prev = curr;
        curr = temp;
    }
    
    
    
    return res;
}

sumFibs(75025);