/* 
  Given in an alumni interview in 2021.
  String Encode
  You are given a string that may contain sequences of consecutive characters.
  Create a function to shorten a string by including the character,
  then the number of times it appears. 
  
  
  If final result is not shorter (such as "bb" => "b2" ),
  return the original string.
  */

const str1 = "aaaabbcddd";
const expected1 = "a4b2c1d3";
const expected1a = "a4b2cd3";

const str2 = "";
const expected2 = "";

const str3 = "a";
const expected3 = "a";

const str4 = "bbcc";
const expected4 = "bbcc";

/**
 * Encodes the given string such that duplicate characters appear once followed
 * by a number representing how many times the char occurs. Only encode strings
 * when the result yields a shorter length.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str The string to encode.
 * @returns {string} The given string encoded.
 */
function encodeStr(str) {
    let newStr = "";
    let counter = 1;
    let current_letter = str[0];
    for (var i = 0; i < str.length; i++) {
            if (str[i] == str[i + 1]){
                counter++;
            }
            else {
                newStr += str[i] + counter;
                counter = 1;
                current_letter = str[i + 1];
            }
        }
    return newStr.length < str.length? newStr: str;

}
console.log(encodeStr(str1)); // "a4b2c1d3"
console.log(encodeStr(str2)); // ""
console.log(encodeStr(str3)); // "a"
console.log(encodeStr(str4)); // "bbcc"

/*****************************************************************************/


const strA = "a3b2c1d3";
const expectedA = "aaabbcddd";

const strB = "a3b2c12d10";
const expectedB = "aaabbccccccccccccdddddddddd";

/**
 * Decodes the given string by duplicating each character by the following int
 * amount if there is an int after the character.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str An encoded string with characters that may have an int
 *    after indicating how many times the character occurs.
 * @returns {string} The given str decoded / expanded.
 */
//helpful built-ins : isNaN() .repeat() parseInt() 
function decodeStr(str = "") {
    let decoded = "";
    let i = 0;

    while (i < str.length) {
        // Retrieve letter at current index then increment the idx (post increment)
        // to get to the num that comes after the char.
        let char = str[i++];

        //a23b3
        // the num is a string so multiple digits need to be concatenated before
        // converted to a number. '1' + '1' => '11'. 1 + 1 => 2
        let numStr = "";
        /* 
        parseInt returns NaN if it fails to parse. NaN is a weird special value
        that requires using isNaN to check b/c NaN === NaN => false.
        */
        let isNumber = isNaN(parseInt(str[i])) === false;

        /* 
        Iterate over all the nums that come after this string until the next
        non-number.
        */
        while (i < str.length && isNumber) {
            // concatenate the string-num digit then increment.
            numStr += str[i++];
            isNumber = isNaN(parseInt(str[i])) === false;
        }

        // .repeat will automatically convert numStr to a number if it can.
        decoded += char.repeat(numStr);
    }
    return decoded;
}
function decodeStr2(str = "") {
    let decoded = "";
    let numStr = "";
    let letter = str[0];

    for (let i = 1; i < str.length; i++) {
        const num = parseInt(str[i]);

        // letter found, means we have passed digits.
        if (isNaN(num)) {
            // .repeat parses numStr to int for us.
            decoded += letter.repeat(numStr);
            // reset for next letter and it's following digits
            letter = str[i];
            numStr = "";
        } else {
            numStr += str[i];
        }
    }
    // Since we end with a number concat above doesn't happen for the last one.
    return decoded + letter.repeat(numStr);
}
