const findLongestSubstring = require("./find-longest-substring");

describe("#findLongestSubstring", function () {
  it("finds the longest substring", function () {
    expect(findLongestSubstring("")).toBe(0);
    expect(findLongestSubstring("thisisawesome")).toBe(6);
    expect(findLongestSubstring("bbbbbb")).toBe(1);
    expect(findLongestSubstring("longestsubstring")).toBe(8);
    expect(findLongestSubstring("rithmschool")).toBe(7); // 7
    expect(findLongestSubstring("thecatinthehat")).toBe(7); // 7
    expect(findLongestSubstring("thisishowwedoit")).toBe(6);
  });
});

// thecatinthehat
// { t: 9, h: 2, e: 3, c: 4, a: 5, i: 7, n: 8}
// i = 5 ==> start -> 6
function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    //string at this idx
    let char = str[i];
    if (seen[char]) {
      //idx of where it was last seen 
      start = Math.max(start, seen[char]);
    }
    longest = Math.max(longest, i - start + 1);
    seen[char] = i + 1;
  }
  return longest;
}


//start = left pointer, 
// { t: 1, h: 2, e: 3, c: 4, a: 5}
// { t: 6, h: 2, e: 3, c: 4, a: 5, i: 7, n: 8}
// { t: 9, h: 2, e: 3, c: 4, a: 5, i: 7, n: 8}
