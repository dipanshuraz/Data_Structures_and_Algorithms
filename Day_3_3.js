// Given an array of sorted numbers, remove all duplicates from it. You should not use any extra space; after removing the duplicates in-place return the new length of the array.

let arr = [2, 1, 1, 1, 6, 9];

function removeDuplicates(arr) {
  let nextNonDuplicate = 1;
  let i = 1;
  while (i < arr.length) {
    if (arr[nextNonDuplicate - 1] !== arr[i]) {
      arr[nextNonDuplicate] = arr[i];
      nextNonDuplicate += 1;
    }
    i += 1;
  }
  return nextNonDuplicate;
}

console.log(removeDuplicates(arr));

// Time Complexity O(N)
// Space Complexity O(1)
