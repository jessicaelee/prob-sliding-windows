// add whatever parameters you deem necessary
function findLongestSubstring(str) {

  let letterIdx = {};

  let longestCount = 0;
  let count = 0;

  let left = 0;
  let right = 0;

  while (right < str.length) {
    if (letterIdx[str[right]] === undefined) {
      letterIdx[str[right]] = right;
      right++;
      count++;
      if (count > longestCount) {
        longestCount = count;
      }
    } else {
      for (let key in letterIdx) {
        if (letterIdx[key] < letterIdx[str[right]]) delete letterIdx[key];
      }
      left = letterIdx[str[right]] + 1;
      letterIdx[str[right]] = right;
      right++;
      count = right - left;

    };
  };

  return longestCount;
}

module.exports = findLongestSubstring;
