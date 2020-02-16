var isPalindrome = function(x) {
  return x === x.split('').reverse().join('')
};
console.log(isPalindrome('121'))