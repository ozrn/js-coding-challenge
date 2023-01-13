/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(str) {
  return str.split(" ").join(" 😱 ").toUpperCase() + "!"; // the split method converts a string to an array!! // the join method returns a new string by concatenating all of the elements in an array, separated by commas or a specified separator string !!
}
