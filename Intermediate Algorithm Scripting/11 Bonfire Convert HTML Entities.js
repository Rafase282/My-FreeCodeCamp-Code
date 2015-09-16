/* Bonfire: Convert HTML Entities
Difficulty: 2/5

Convert the characters "&", "<", ">", '"' (double quote), and "'" (apostrophe), in a string to their
corresponding HTML entities.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

RegExp HTML Entities

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function convert(str) {
  // Split by character to avoid problems.

  var temp = str.split('');

  // Since we are only checking for a few HTML elements I used a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case '<':
        temp[i] = '&lt;';
        break;
      case '&':
        temp[i] = '&amp;';
        break;
      case '>':
        temp[i] = '&gt;';
        break;
      case '"':
        temp[i] = '&quot;';
        break;
      case "'":
        temp[i] = '&apos;';
        break;
    }
  }

  temp = temp.join('');
  return temp;
}

convert('Dolce & Gabbana');
