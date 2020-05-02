// Given an array, find the average of all contiguous subarrays of size ‘K’ in it.
var arr = [1, 3, 2, 6, -1, 4, 1, 8, 2];
var k = 5;

function findAvgSubArr(arr, k) {
  let res = [];
  let sum;
  for (let i = 0; i < arr.length - k + 1; i++) {
    sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    res.push(sum / k);
  }
  return res;
}

// console.log(findAvgSubArr(arr, k));

// Sliding Window approach
function findAvgSubArrSlidingWindow(arr, k) {
  let sum = 0;
  let res = [];
  let start = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (i >= k - 1) {
      res.push(sum / k);
      sum -= arr[start];
      start += 1;
    }
  }
  return res;
}

console.log(findAvgSubArrSlidingWindow(arr, k));
