/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/
// quarter = 25 cents, dime = 10, nickel = 5, penny = 1
const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */

// function fewestCoinChange(cents) {
//     //Your code here
//     //for loop for each type of coin denomination
//     //going from largest to least type of coin type
//     //use modulo 0
//     //introduce empty dictionary and append 
//     let expected = {}
//     let counter = 0
//     while (cents >= 25) {
//         if (cents >= 25) {
//             counter += 1
//             cents -= 25
//         }
//         // expected = {'quarter': counter}
//         expected['quarter'] = counter
//     }
//     counter = 0
//     while (cents >= 10) {
//         if (cents >= 10) {
//             counter += 1
//             cents -= 10
//         }
//         // expected = {'dime': counter}
//         expected['dime'] = counter
//     }
//     counter = 0
//     while (cents >= 5) {
//         if (cents >= 5) {
//             counter += 1
//             cents -= 5
//         }
//         // expected = {'nickle': counter}
//         expected['nickle'] = counter
//     }
//     counter = 0
//     // expected = {'penny': cents}
//     if (cents != 0) {
//         expected['penny'] = cents
//     }
//     return expected
// }


// Spencer's

function fewestCoinChange(cents) {
    let coins = {};
    if (cents >= 25) {
        coins.quarter = Math.floor(cents / 25);
        cents %= 25;
    }
    if (cents >= 10) {
        coins.dime = Math.floor(cents / 10);
        cents %= 10;
    }
    if (cents >= 5) {
        coins.nickel = Math.floor(cents / 5);
        cents %= 5;
    }
    if (cents >= 1) {
        coins.penny = cents;
    }
    return coins;

}

// function fewestCoinChange(cents) {
//     let coinPurse = {
//         quarter: 0,
//         dime: 0,
//         nickel: 0,
//         penny: 0
//     }
//     while (cents >= 0) {
//         if (cents >= 25) {
//             coinPurse['quarter']++
//             cents -= 25
//         }
//         if (cents < 25) {
//             coinPurse['dime']++
//             cents -= 10
//         }
//         if (cents < 9) {
//             coinPurse['nickel']++
//             cents -= 5;
//         }
//         if (cents < 4) {
//             coinPurse['penny']++
//             cents -= 1;
//         }
//         return coinPurse
//     }
// }

console.log(fewestCoinChange(cents1)) // { quarter: 1 }
console.log(fewestCoinChange(cents2)) // { quarter: 2 }
console.log(fewestCoinChange(cents3)) // { nickel: 1, penny: 4 }
console.log(fewestCoinChange(cents4)) // { quarter: 3, dime: 2, penny: 4 }