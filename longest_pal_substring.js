function longestPalindromicSubstring(s) {
  let longestSubstring = "";

  for (let i = 0; i < s.length; i++) {
    let oddString = s[i];
    let evenString = "";
    let j = 1;

    // even substrings
    if (s[i + j] === s[i]) {
      evenString = s.slice(i, i + j + 1);
      // check next largest
      while (s[i - j] === s[i + j + 1] && (i + j) < s.length && (i - j) >= 0) {
        evenString = s.slice(i - j, i + j + 2);
        j++;
      }

      j = 1;
    }

    // odd substrings
    while (s[i - j] === s[i + j] && (i - j) >= 0) {
      oddString = s.slice(i - j, i + j + 1);
      j++;
    }

    // replace longest Length if length at this center is longer
    if (evenString.length > longestSubstring.length) {
      longestSubstring = evenString;
    }
    if (oddString.length > longestSubstring.length) {
      longestSubstring = oddString;
    }
  }

  return longestSubstring;
}

console.log(longestPalindromicSubstring('banana'));
console.log(longestPalindromicSubstring('a'));
console.log(longestPalindromicSubstring('aaa'));
console.log(longestPalindromicSubstring('aa'));
