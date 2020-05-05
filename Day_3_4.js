//  Given an unsorted array of numbers and a target ‘key’, remove all instances of ‘key’ in-place and return the new length of the array.

let arr = [3, 2, 3, 6, 3, 10, 9, 3];
let k = 3;

function removeKeys(arr, key) {
  let nextElem = 0;
  for (let i = 0; i < arr.length; i++) {
    if (key !== arr[i]) {
      arr[nextElem] = arr[i];
      nextElem += 1;
    }
  }
  return nextElem;
}

console.log(removeKeys(arr, k));

// Time Complexity : O(N)
// Space Complexity : O(1)
