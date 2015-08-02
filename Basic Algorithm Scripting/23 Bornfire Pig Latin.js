/* Bonfire: Pig Latin
Difficulty: 2/5

Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end
of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

Array.indexOf()
Array.push()
Array.join()
String.substr()
String.split()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282 
*/

function translate(str) {
    var pigLatin = '';
    // User regular expression to check if the first character is a vowel, upper or lowercase.
    if (str[0].match(/[aeiou]/gi)){
    	// if true, add 'way' at the end and store it.
        pigLatin = str + 'way';
    } else {
    	// Otherwise take the string withotu the first character, and add it to the end and 'ay'
        pigLatin = str.substr(1) + str.substr(0,1) + 'ay';
    }
    return pigLatin;
}

console.log(translate("consonant"));
console.log(translate("Agricultura"));