// better algorithm
// initialize array of 256 elements new Array(256)(-1)
// iterate through letters, changing array to save last occurrance

var lengthOfLongestSubstring = function(s) {
    let letters = {};
    let longestString = "";
    let string = "";
    
    for (let i = 0; i < s.length; i++){
        let letter = s[i];
        if (typeof letters[letter] != 'number') {
            string += letter;
            letters[letter] = i;
        } else {
          i = letters[letter];
          if (string.length > longestString.length) {
            longestString = string;
          }
          letters = {};
          string = "";
        }
    }
    
    if (string.length > longestString.length) {
      longestString = string;
    }
    return longestString;
};

console.log(lengthOfLongestSubstring("aab"));