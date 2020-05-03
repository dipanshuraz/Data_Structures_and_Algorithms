// Given an array of characters where each character represents a fruit tree, you are given two baskets and your goal is to put maximum number of fruits in each basket. The only restriction is that each basket can have only one type of fruit.

let arr = ["A", "B", "C", "A", "C"];
let k = 2;
function fruitsInBasket(arr, k) {
  let start = 0;
  let maxLen = 0;
  let fruitObj = {};
  for (let i = 0; i < arr.length; i++) {
    let rightFruit = arr[i];
    if (!(rightFruit in fruitObj)) {
      fruitObj[rightFruit] = 0;
    }
    fruitObj[rightFruit] += 1;

    while (Object.keys(fruitObj).length > k) {
      let leftFruit = arr[start];
      fruitObj[leftFruit] -= 1;
      if (fruitObj[leftFruit] === 0) {
        delete fruitObj[leftFruit];
      }
      start += 1;
    }
    maxLen = Math.max(maxLen, i - start + 1);
  }
  return maxLen;
}
console.log(fruitsInBasket(arr, k));
