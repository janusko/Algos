/* 
  Given a string,
  return a new string with the duplicate characters excluded
  Bonus: Keep only the last instance of each character.
*/

const str1 = "abcABCabcABCabcABC";
const expected1 = "abcABC";

const str2 = "helloo";
const expected2 = "helo";

const str3 = "";
const expected3 = "";

const str4 = "aa";
const expected4 = "a";

//bonus
const str5 = "aba"
const expected5 = "ba"

/**
 * De-dupes the given string.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str A string that may contain duplicates.
 * @returns {string} The given string with any duplicate characters removed.
 */
function stringDedupe(str) {
    let newStr = "";
    for (var i = 0; i < str.length; i++) {
        for(var j = 0; j < str.length; j++) {
            if (str[i] == str[j]) {
                newStr += str[j];
            }
            else {
                break;
            }
        }
    }
}

// USING FREQUENCY

// function stringDedupe(str) {
//   let newStr = ""
//   let frequency = {}

//   for( let i = 0; i < str.length; i ++){
//       let char = str[i];
//       if (!frequency[char]){
//       //     frequency[char]++;
//       // }
//       // else{
//           frequency[char] = 1;
//           newStr = newStr+char 
//       }
//   }
//   return newStr
// }

// Devin and Christina solution

// function stringDedupe(str) {
//   var return_string = "";
//   for( var i = 0; i < str.length; i ++) {
//       var match = false;
//       for ( var x = 0; x < return_string.length; x++ ) {
//           if(str[i] == return_string[x]) {
//               match = true;
//               break;
//           } 
//       }
//       if (!match) {
//           return_string += str[i]
//       }
//   }
//   return return_string;
// }

// console.log(stringDedupe(str1));
// console.log(stringDedupe(str2));
// console.log(stringDedupe(str3));
// console.log(stringDedupe(str4));
// console.log(stringDedupe(str5));



function stringDedupe(str) {
  let distinct
}

console.log(stringDedupe(str1));
console.log(stringDedupe(str2));
console.log(stringDedupe(str3));
console.log(stringDedupe(str4));
console.log(stringDedupe(str5));