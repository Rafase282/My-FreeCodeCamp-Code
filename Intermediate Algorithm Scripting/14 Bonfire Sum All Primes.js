/* Bonfire: Sum All Primes
DIfficulty: 2/5

Sum all the prime numbers up to and including the provided number.

A prime number is defined as having only two divisors, 1 and itself. For example, 2 is a prime
number because it's only divisible by 1 and 2. 1 isn't a prime number, because it's only divisible
by itself.

The provided number may not be a prime.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

For Loops Array.push()

Code by Rafael Rodriguez (rafase282) using implementation form here
http://stackoverflow.com/questions/11966520/how-to-find-prime-numbers-between-0-100
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function sumPrimes(num) {
  var res = 0;

  // FUnction to get the primes up to max in an array
  function getPrimes(max) {
    var sieve = [];
    var i;
    var j;
    var primes = [];
    for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
        // i has not been marked -- it is prime
        primes.push(i);
        for (j = i << 1; j <= max; j += i) {
          sieve[j] = true;
        }
      }
    }

    return primes;
  }

  // Add the primes
  var primes = getPrimes(num);
  for (var p = 0; p < primes.length; p++) {
    res += primes[p];
  }

  return res;
}

sumPrimes(977);
