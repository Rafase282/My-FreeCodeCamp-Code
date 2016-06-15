/* Bonfire: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function rot13(str) { // LBH QVQ VG!
  return str.toUpperCase().split('').map(function(subStr) {
    return decode(subStr.charCodeAt(0));
  }).join('');

  function decode(arg) {
    // Takes care of characters that are not in [A-Z] such as ! and ? and decodes [A-Z]
    var decoded = 0;
    if (arg >= 65 && arg <= 90) {
      decoded = (arg + 13) % 91;
      return String.fromCharCode(decoded < 65 ? decoded += 65 : decoded);
    }
    return String.fromCharCode(arg);
  }
}

// Change the inputs below to test
rot13("SERR PBQR PNZC");
