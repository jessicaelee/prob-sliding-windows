// Time Complexity: O(log N)

function countZeroes(arr) {
  let midIdx = Math.floor(arr.length / 2);
  let previousMidIdx = null;

  while (midIdx !== previousMidIdx) {
    previousMidIdx = midIdx;
    if (arr[midIdx] === 0) {
      midIdx = Math.floor(midIdx / 2);
    } else if (arr[midIdx] === 1) {
      midIdx = Math.floor(previousMidIdx)
    }

  }
  return arr.length - midIdx;
}

module.exports = countZeroes