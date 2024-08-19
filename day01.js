//Programming question : Longest word in a String---------------------

//Q. Write a function findLongestWord that takes a string as input
//and returns the longest word in the string. If there are multiple longest words,
//return the first one encountered.

//--------------------------Constraints:
//The input string may contain alphabetic characters, digits, spaces, and punctuation
//The input string is non-empty
//The input string may contain multiple words separated by spaces.

//---------------------------Note:
//If the input string is empty or contains only whitespaces, the function should return an false.
//The function should ignore leading and trailing whitespaces when determinig the longest word.

//--------------------------------------code------------------------------
let myString = "A monkey was walking on street7 with his @owner      ";

function findLongestWord(someStr) {
  if (someStr === "") {
    return false;
  }
  let trimmedStr = someStr.trim();
  let newStr = trimmedStr.split(" ");
  let longestWord = "";
  for (let word of newStr) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  return longestWord;
}

let result = findLongestWord(myString);
console.log(result);
