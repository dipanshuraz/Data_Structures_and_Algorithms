// An Alternate approach
// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 6;

function findPairUsingObj(arr, k) {
  let obj = {};
  for (let i = 0; i < arr.length; i++) {
    const num = k - arr[i];

    if (num in obj) {
      return [obj[num], i];
    }
    obj[(arr[i], i)];
  }
  return [-1, -1];
}

console.log(findPairUsingObj(arr, k));

// Time Complexity : O(N)
// Space Complexity : O(N)
