/* 
Parens Valid
Given an str that has parenthesis in it
return whether the parenthesis are valid
*/

const str1 = "Y(3(p)p(3)r)s"; // ( () () )
const expected1 = true;

const str2 = "N(0(p)3"; // ( ( ) 
const expected2 = false;
// Explanation: not every parenthesis is closed.

const str3 = "N(0)t ) 0(k"; // ( ) ) (
const expected3 = false;
// Explanation: because the second ")" is premature: there is nothing open for it to close.


/**
 * Determines whether the parenthesis in the given string are valid.
 * Each opening parenthesis must have exactly one closing parenthesis.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the parenthesis are valid.
 */
function parensValid(str) {

    // My solution, work in progress:

//     let parens = '';
//     for (let i = 0; i = str.length; i++) {
//         if(str[i] == '(' || ')') {
//             parens += str[i];
//         }
//     }
//     for (let j = parens.length -1; j >= 0; j--) {
//         if (parens[j] == '(' && parens[j + 1] != ')'){
//             return false;
//         }
//     }
// }

function parensValid(str) {
    let count = 0

    for (i =0; i<str.length;i++){
        if (str[i] == '('){
            count += 1
        }
        else if(str[i] == ')'){
            count -= 1
        }

        if (count == -1){
            return false
        }
    }

    if (count == 0){
        return true
    }
    else{
        return false
    }
}


// Spencer's

// let unmatchedOpens = 0;
// for (let char of str) {
//   if (char === "(") unmatchedOpens++
//   if (char === ")") unmatchedOpens--
//   if (unmatchedOpens < 0) return false
// }
// return unmatchedOpens == 0;
// }


console.log(parensValid(str1)) // expected: true
console.log(parensValid(str2)) // expected: false
console.log(parensValid(str3)) // expected: false