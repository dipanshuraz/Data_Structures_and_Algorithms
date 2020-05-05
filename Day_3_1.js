// Given an array of sorted numbers and a target sum, find a pair in the array whose sum is equal to the given target.

let arr = [1, 2, 3, 4, 5, 6, 7];
let k = 6;

function twoPointer(arr, k) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const sum = arr[left] + arr[right];
    if (sum == k) {
      return [left, right];
    }
    if (k > sum) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

console.log(twoPointer(arr, k));

// Time Complexity : 0(N)
// Space Compelixty : 0(1)
