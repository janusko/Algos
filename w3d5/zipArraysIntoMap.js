/* 
  Zip Arrays into Map
  
  
  Given two arrays, create an associative array (aka hash map, an obj / dictionary) containing keys from the first array, and values from the second.
  Associative arrays are sometimes called maps because a key (string) maps to a value 
*/

const keys1 = ["flavor", "size", "is_delicious"];
const vals1 = ["chocolate", 10, true];
const expectedA = {
    flavor: 'chocolate',
    size: 10,
    is_delicious: true,
};

const keys2 = [];
const vals2 = [];
const expectedB = {};

const keys3 = ['name', 'number', 'type', 'evolves_from']
const vals3 = ['Gyarados', 130, 'water/flying', 'Magikarp']
const expectedC = {
    name: 'Gyarados',
    number: 130,
    type: 'water/flying',
    evolves_from: 'Magikarp'
}


/**
 * Converts the given arrays of keys and values into an object.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<string>} keys
 * @param {Array<any>} values
 * @returns {Object} The object with the given keys and values.
 */
function zipArraysIntoMap(arr1, arr2) {
    let obj = {}
    for (let i = 0; i < arr1.length; i++) {
        obj[arr1[i]] = arr2[i];
    }
    return obj
}


// Spencer's solution:

// function isPalindrome(str) { 
//     if (str.length < 2) return true;
//     let start = 0;
//     let end = str.length - 1;
//     while (start < end) {
//         if (str[start] !== str[end]) return false;
//         start++;
//         end--;
//     }
//     return true;
// }



console.log(zipArraysIntoMap(keys1, vals1)) // expected: { flavor: 'chocolate', size: 10, is_delicious: true } (order may vary)
console.log(zipArraysIntoMap(keys2, vals2)) // expected: {} 
console.log(zipArraysIntoMap(keys3, vals3)) // expected: { name: 'Gyarados', number: 130, type: 'water/flying', evolves_from: 'Magikarp' } (order may vary)
