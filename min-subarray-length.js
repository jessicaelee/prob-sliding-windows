// add whatever parameters you deem necessary
function minSubarrayLength(arr, num) {

  let shortestLength = Infinity;
  let currentSum = 0;
  let left = 0;
  let right = 0;

  currentSum += arr[left];

  while (right < arr.length) {
    if (currentSum < num) {
      right++;
      currentSum += arr[right];
    } else if (currentSum >= num) {
      let currentLength = right - left + 1;
      if (currentLength < shortestLength) {
        shortestLength = currentLength;
      }
      currentSum -= arr[left];
      left++;
    };
  };

  return shortestLength === Infinity ? 0 : shortestLength;
}

module.exports = minSubarrayLength;
