/* 
Braces Valid
Given a string sequence of parentheses, braces and brackets, determine whether it is valid. 
*/

const strA = "W(a{t}s[o(n{ c}o)m]e )h[e{r}e]!";
const expectedA = true;

const strB = "D(i{a}l[ t]o)n{e";
const expectedB = false;

const strC = "A(1)s[O (n]0{t) 0}k";
const expectedC = false;

/**
 * Determines whether the string's braces, brackets, and parenthesis are valid
 * based on the order and amount of opening and closing pairs.
 * - Time: O(?).
 * - Space: O(?).
 * @param {string} str
 * @returns {boolean} Whether the given strings braces are valid.
 */
function bracesValid(str) {
    const stack = [];
    const isOpen = { "(": true, "{": true, "[": true }
    const closesToOpens = { ")": "(", "}": "{", "]": "[" };

    for (let char of str) {
        if (isOpen[char]) {
            stack.push(char);
        } else if (closesToOpens[char]) {
            if (closesToOpens[char] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}
}
console.log(bracesValid(strA)) // expected: true
console.log(bracesValid(strB)) // expected: false
console.log(bracesValid(strC)) // expected: false
