// Maximum Sum Subarray of Size K (easy)
let arr = [2, 3, 4, 1, 5];
let k = 2;
// Explanation: Subarray with maximum sum is [5, 1, 3].

function maxSumSubArr(arr, k) {
  let sum = 0;
  let start = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      max = Math.max(max, sum);
      sum -= arr[start];
      start++;
    }
  }
  return max;
}

console.log(maxSumSubArr(arr, k));

// Time Complexity #
// The time complexity of the above algorithm will be O(N)O(N).

// Space Complexity #
// The algorithm runs in constant space O(1)O(1).

let arr2 = [3, 4, 1, 1, 6];
let s = 8;

// Given an array of positive numbers and a positive number ‘S’, find the length of the smallest contiguous subarray whose sum is greater than or equal to ‘S’. Return 0, if no such subarray exists.

function smallestSumSubArr(arr2, s) {
  let sum = 0;
  let start = 0;
  let minLen = Infinity;

  for (let i = 0; i < arr2.length; i++) {
    sum += arr2[i];
    while (sum >= s) {
      minLen = Math.min(minLen, i - start + 1);
      sum -= arr2[start];
      start += 1;
    }
  }
  if (minLen == Infinity) return 0;
  return minLen;
}

console.log(smallestSumSubArr(arr2, s));

// Time Complexity O(N)
// space O(1)
