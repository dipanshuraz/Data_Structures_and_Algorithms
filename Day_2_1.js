// Given a string, find the length of the longest substring in it with no more than K distinct characters.
let str = "araaci";
let k = 2;

function longestSubstrwithKdistinct(str, k) {
  let start = 0;
  let maxLen = 0;
  let obj = {};

  for (let i = 0; i < str.length; i++) {
    const rightChar = str[i];
    if (!(rightChar in obj)) {
      obj[rightChar] = 0;
    }
    obj[rightChar] += 1;
    // Shrink the sliding window until we left with the 'k' distinct chars in 'obj'
    while (Object.keys(obj).length > k) {
      const leftChar = str[start];
      obj[leftChar] -= 1;
      if (obj[leftChar] == 0) {
        delete obj[leftChar];
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}

console.log(longestSubstrwithKdistinct(str, k));

// Time Complexity O(N)
