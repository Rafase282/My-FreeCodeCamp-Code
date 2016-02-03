/* Word Blanks

We will now use our knowledge of strings to build a "Mad Libs" style word game we're calling "Word Blanks". You will create an (optionally humorous) "Fill in the Blanks" style sentence.

You will need to use string operators to build a new string, result, using the provided variables: myNoun, myAdjective, myVerb, and myAdverb.

You will also need to provide additional strings, which will not change, in between the provided words.

We have provided a framework for testing your results with different words. The tests will run your function with several different inputs to make sure all of the provided words appear in the output, as well as your extra strings.

Code by Rafael Rodriguez
rafase282@gmail.com
http://www.freecodecamp.com/rafase282
*/

function wordBlanks(myNoun, myAdjective, myVerb, myAdverb) {
  var result = "";
  // Your code below this line
  result += "My " + myAdjective + " " + myNoun + " " + myVerb + " very " + myAdverb + ".";

  // Your code above this line
  return result;
}

// Change the words here to test your function
wordBlanks("dog", "big", "ran", "quickly");
