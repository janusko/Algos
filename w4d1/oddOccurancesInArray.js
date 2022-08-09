/* 
Given a non-empty array of odd length containing ints where every int but one
has a matching pair (another int that is the same)
return the only int that has no matching pair.
*/

function makeFrequencyTable(arr) {
    const obj = {};
    for (var i = 0; i <arr.length; i++) {
        if (obj.hasOwnProperty(arr[i])) {
          // hasOwnProperty (boolean) is checking if the object already arr[i]
            obj[arr[i]] += 1;
        }
        else {
            obj[arr[i]] = 1
        }
    }
    return obj
}

const numsA = [1];
const expectedA = 1;

const numsB = [5, 4, 5];
const expectedB = 4;

const numsC = [5, 4, 3, 4, 3, 4, 5];
const expectedC = 4; // there is a pair of 4s but one 4 has no pair.

const numsD = [5, 2, 6, 2, 3, 1, 6, 3, 2, 5, 2];
const expectedD = 1;

// function oddOccurrencesInArray(nums) {
//     let numbers = makeFrequencyTable(nums);
//     let results = 0;
//     for (var i = 0; i < numbers.length; i++) {
//         if (numbers.hasOwnProperty())
//             if (numbers[i] % 2 == 1) {
//                 results = numbers[i];
//             }
//     }
//     return results
}

function oddOccurrencesInArray(nums) {
    var num_obj = makeFrequencyTable(nums);
    var results = 0;
    for(var key in num_obj) {
        // console.log(key);
        if(num_obj[key] % 2 == 1)
        return key;
    }
}

console.log(oddOccurrencesInArray(numsA), "should equal", expectedA);
console.log(oddOccurrencesInArray(numsB), "should equal", expectedB);
console.log(oddOccurrencesInArray(numsC), "should equal", expectedC);
console.log(oddOccurrencesInArray(numsD), "should equal", expectedD);
