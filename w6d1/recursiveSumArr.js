
/* 
  Recursively sum an arr of ints
*/

const numsA = [1, 2, 3];
const expectedA = 6;

const numsB = [1];
const expectedB = 1;

const numsC = [];
const expectedC = 0;

/**
 * Add params if needed for recursion <-------
 * Recursively sums the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The sum of the given nums.
 */
function sumArr(nums, i = 0) {
    //Your code here

    //Base case?
    if (i === nums.length) {
        return 0
    }
    //Any more logic?
    //Recursive call?

    return sumArr(nums, i + 1) + nums[i];
}

console.log(sumArr(numsA)) // 6
console.log(sumArr(numsB)) // 1
console.log(sumArr(numsC)) // 0
/*****************************************************************************/
