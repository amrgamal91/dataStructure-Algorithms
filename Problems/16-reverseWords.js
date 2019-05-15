//===================================================================================
//  * Problem 16 : reverse words in a string
//* *********************************************************************************
function reverseWords(str) {
  words = str.split(" ");
  let reversedString = "";
  for (let i = words.length - 1; i >= 0; i--) {
    reversedString += words[i] + " ";
  }
  return reversedString;
}

console.log(reverseWords("My name is amr"));
