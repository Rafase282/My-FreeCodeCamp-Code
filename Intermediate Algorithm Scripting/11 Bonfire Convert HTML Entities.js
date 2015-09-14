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
    // &colon;&rpar;
    // Split by character to avoid problems.
    var temp = str.split('');
    // Since we are only checking for a few HTML elements I used a switch
    for (var t in temp){
        switch (temp[t]){
            case '<' :
                temp[t] = '&lt;';
                break;
            case '&':
                temp[t] = '&amp;';
                break;
            case '>':
                temp[t] = '&gt;';
                break;
            case '"':
                temp[t] = '&quot;';
                break;
            case "'":
                temp[t] = '&apos;';
                break;
            }
        }
  temp = temp.join('');
  return temp;
}

convert("Shindler's List");