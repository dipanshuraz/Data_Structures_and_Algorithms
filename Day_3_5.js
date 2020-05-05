// Given a sorted array, create a new array containing squares of all the number of the input array in the sorted order.

let arr = [-2, -1, 0, 2, 3];

function squareTwoPointer(arr) {
  const n = arr.length;
  let squares = Array(n).fill(0);
  let highestSquareIndex = n - 1;
  let left = 0,
    right = n - 1;
  while (left < right) {
    let leftSquare = arr[left] * arr[left];
    let rightSquare = arr[right] * arr[right];

    if (leftSquare > rightSquare) {
      squares[highestSquareIndex] = leftSquare;
      left += 1;
    } else {
      squares[highestSquareIndex] = rightSquare;
      right -= 1;
    }
    highestSquareIndex -= 1;
  }
  return squares;
}

console.log(squareTwoPointer(arr));

// Time Complexity : O(N)
// Space Complexity : O(1)
