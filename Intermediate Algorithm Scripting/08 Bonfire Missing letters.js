/* Bonfire: Missing letters
Difficulty: 2/5

Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charCodeAt()
String.fromCharCode()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function fearNotLetter(str) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    let index = alphabet.indexOf(str[0]);
    let i = 0;
    while (i < str.length) {
        index++;
        i++;
        const letter = alphabet[index];
        if (letter !== str[i]) {
            return letter;
        }        
    }
    return undefined;
}

fearNotLetter('abce');

