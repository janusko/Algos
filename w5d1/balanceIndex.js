/* 
  Balance Index
  Here, a balance point is ON an index, not between indices.
  Return the balance index where sums are equal on either side
  (exclude its own value).
  
  Return -1 if none exist.
  
*/
// 0   1  2  3  4
const numsA = [-2, 5, 7, 0, 3];
const expectedA = 2;

const numsB = [9, 9];
const expectedB = -1;


/**
 * Finds the balance index in the given array where the sum to the left of the
 *    index is equal to the sum to the right of the index.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} nums
 * @returns {number} The balance index or -1 if there is none.
 */
function balanceIndex(nums) {
  //Your code here
  if (nums.length < 3) {
    return -1;
  }
  let left = nums[0]
  let right = 0

  for (let i = 2; i < nums.length; i++) {
    right += nums[i]
  }

  for (let j = 1; j < nums.length - 1; j++) {
    if (left === right) return j
    right -= nums[j + 1]
    left += nums[j]
  }
  return -1
}

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1

console.log(balanceIndex(numsA)) // 2
console.log(balanceIndex(numsB)) // -1