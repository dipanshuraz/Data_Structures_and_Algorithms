// Pattern Fast _ Slow pointers
// Any number will be called a happy number if, after repeatedly replacing it with a number equal to the sum of the square of all of its digits, leads us to number ‘1’. All other (not-happy) numbers will never reach ‘1’. Instead, they will be stuck in a cycle of numbers which does not include ‘1’.

const happyNumber = (num) => {
  let slow = num;
  let fast = num;
  while (true) {
    slow = findSquareSum(slow); // 1 step
    fast = findSquareSum(findSquareSum(fast)); // 2 step
    if (slow == fast) break;
  }
  return slow === 1;
};

const findSquareSum = (num) => {
  let sum = 0;
  while (num > 0) {
    digit = num % 10;
    sum += digit * digit;
    num = Math.floor(num / 10);
  }
  return sum;
};

console.log(happyNumber(23));
console.log(happyNumber(5));

// Time Complexity : O(logN)
// Space Complexity :  O(1)
