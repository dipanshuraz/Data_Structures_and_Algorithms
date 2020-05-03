// Given a string, find the length of the longest substring which has no repeating characters.
let s = "aabccbb";

// Using Obj
function longestSubstrNoRepeatingChar(s) {
  let start = 0;
  let obj = {};
  let maxLen = 0;

  for (let i = 0; i < s.length; i++) {
    const rightChar = s[i];
    if (rightChar in obj) {
      start = Math.max(start, obj[rightChar] + 1);
    }
    obj[rightChar] = i;
    maxLen = Math.max(maxLen, i - start + 1);
  }

  return maxLen;
}

//  Using Set()
function longestSubstrNoRepeatingChar(s) {
  let count = 0;
  let start = 0;
  let end = 0;
  let set = new Set();
  while (start < s.length && end < s.length) {
    let char = s[end];
    if (!set.has(char)) {
      set.add(char);
      end++;
      count = Math.max(count, end - start);
    } else {
      set.delete(s[start]);
      start++;
    }
  }
  return count;
}

console.log(longestSubstrNoRepeatingChar(s));
