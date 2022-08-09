/* 
  Given a string containing space separated words
  Reverse each word in the string.
  If you need to, use .split to start, then try to do it without.
*/

const strA = "hello";
const expectedA = "olleh";

const strB = "hello world";
const expectedB = "olleh dlrow";

const strC = "abc def ghi";
const expectedC = "cba fed ihg";

/**
 * Reverses the letters in each words in the given space separated
 * string of words. Does NOT reverse the order of the words themselves.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str Contains space separated words.
 * @returns {string} The given string with each word's letters reversed.
 */
function reverseWords(str) {
    let reversed = "";
    let temp = ""
    for (let char of str){
        if (char === " "){
            reversed += temp + " "
            temp = ""
        } else {
            temp = char + temp
        }
    }
    //capture last word
    reversed += temp;
    return reversed
}


function reverseWords(str) {
  //Your code here
  var splitString = str.split(" ");
  var temp = ""
  for (i=0; i<splitString.length; i++){
      for (j=splitString[i].length-1; j>=0 ;j--){
          temp += splitString[i][j]
      }
      temp += " "
  }
  return temp
} 

console.log(reverseWords(strA)) //expectedA: olleh
console.log(reverseWords(strB)) //expectedB: olleh dlrow
console.log(reverseWords(strC)) //expectedC: cba fed ihg