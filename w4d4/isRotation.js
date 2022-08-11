/* 
  Create the function isRotation(str1,str2) that
  returns whether the second string is a rotation of the first.
*/

const strA1 = "ABCD";
const strA2 = "CDAB";
// Explanation: if you start from A in the 2nd string, the letters are in the same order, just rotated
const expectedA = true;

const strB1 = "ABCD";
const strB2 = "CDBA";
// Explanation: all same letters in 2nd string, but out of order
const expectedB = false;

const strC1 = "ABCD";
const strC2 = "BCDAB";
// Explanation: same letters in correct order but there is an extra letter.
const expectedC = false;

/**
 * Determines whether the second string is a rotated version of the first.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} s1
 * @param {string} s2
 * @returns {boolean} Whether the second string is a rotated version of the 1st.
 */
function isRotation(s1, s2) {

}

console.log(isRotation(strA1, strA2)); // expected: true
console.log(isRotation(strB1, strB2)); // expected: false
console.log(isRotation(strC1, strC2)); // expected: false



// SPENCER


function rotateStr(str, amnt){
    let amnt = amnt % str.length;
    if (amnt == 0) return str;
    let charsToFront = "";
    let theRest = "";
    for (let i = str.length - amnt; i < str.length; i++){
        charsToFront += str[i];
    }
    for (let i = 0; i < str.length - amnt; i++){
        theRest += str[i];
    }
    return charsToFront + theRest;

}

function rotateStr2(str, amnt) {
    const rotateAmnt = amnt % str.length;
    return str.slice(str.length - rotateAmnt) + str.slice(0, str.length - rotateAmnt);
}
  
function isRotation(s1, s2) {
    if (s1.length != s2.length) return false;
    for (let i = 0; i < s1.length; i++){
        if (s1 == rotateStr(s2, i)) return true;
    }
    return false;
    
}

function isRotation2(s1, s2){
    if (s1.length != s2.length) return false;
    let combined = s1 + s1;
    return combined.includes(s2);
}
