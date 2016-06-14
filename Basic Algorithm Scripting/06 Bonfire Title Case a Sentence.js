/* Bonfire: Title Case a Sentence
Difficulty: 1/5

Return the provided string with the first letter of each word capitalized.

For the purpose of this exercise, you should also capitalize connecting words like 'the' and 'of'.

Remember to use RSAP if you get stuck. Try to pair program. Write your own code.

Here are some helpful links:

String.charAt()

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

// Old, kept for reference purposes
String.prototype.replaceAt = function(index, character) {
  // Returns the new modified character
  return this.substr(0, index) + character + this.substr(index + character.length);
};

function titleCase(str) {
  var newTitle = str.split(' ');
  var updatedTitle = [];
  for (var st = 0; st < newTitle.length; st++) {
    updatedTitle[st] = newTitle[st].toLowerCase().replaceAt(0, newTitle[st].charAt(0).toUpperCase());
  }

  return updatedTitle.join(' ');
}

titleCase("I'm a little tea pot");

// Simpler version, can be done with just regex too

function titleCase(str) {
  return str.toLowerCase().split(' ').map(function(word) {
    return word.replace(/(\w)/, (match, p1) => p1.toUpperCase());
  }).join(' ');
}

titleCase("I'm a little tea pot");
