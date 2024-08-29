var longestPalindrome = function(s) {
  let palindromes = [];

  if (s.length <= 1) {
    return s;
  }
  for (let i = 0; i < s.length; i++) {
    let j = 0;
    let k = 0;
    while (s[i - j] === s[i + j] && s[i + j] && s[i - j]) {
      j++;
    }
    palindromes.push(s.slice(i - j + 1, i + j));
    while (s[i - k] === s[i + k + 1] && s[i - k] && s[i + k + 1]) {
      k++;
    }
    palindromes.push(s.slice(i - k + 1, i + k + 1));
  }
  return palindromes.sort((a, b) => {
    return b.length - a.length;
  })[0];
};
console.log(longestPalindrome("babad"));
