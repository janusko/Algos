/* 
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

const str1 = "creature";
const expected1 = "erutaerc";

const str2 = "dog";
const expected2 = "god";

const str3 = "hello";
const expected3 = "olleh";

const str4 = "";
const expected4 = "";


/**
 * Reverses the given str.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str String to be reversed.
 * @returns {string} The given str reversed.
 */
function reverseString(str) {
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) { 
      // -1 starts at end of str (ie "dog" would start at index 2, then working our way back to 0)
        newStr += str[i];
    }
    return newStr;
}

console.log(reverseString(str1)); // "erutaerc"
console.log(reverseString(str2)); // "god"
console.log(reverseString(str3)); // "olleh"
console.log(reverseString(str4)); // ""

/*****************************************************************************/

// could also use .split("").reverse().join("")

"""
let rev = "" 
for (let char of str) {
    rev = char + str
}
return rev

cat
rev = "c"
next iteration
a + c
rev = "ac"
next iteration
t + ac
rev = "tac"
"""