/**
 * @param {string} digits
 * @return {string[]}
 */
let concat = (arr1, arr2) => {
  let newArr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      newArr.push(arr1[i] + arr2[j]);
    }
  }
  return newArr;
};
var letterCombinations = function(digits) {
  let letterMap = new Map([
    ["2", ["a", "b", "c"]],
    ["3", ["d", "e", "f"]],
    ["4", ["g", "h", "i"]],
    ["5", ["j", "k", "l"]],
    ["6", ["m", "n", "o"]],
    ["7", ["p", "q", "r", "s"]],
    ["8", ["t", "u", "v"]],
    ["9", ["w", "x", "y", "z"]]
  ]);
  if(digits === ''){
    return []
  }
  if(digits.split('').length === 1){
    return letterMap.get(digits)
  }
  let letters = digits.split("").map(val => {
    return letterMap.get(val);
  });
  let curArr = letters[0];
  for (let i = 1; i < letters.length; i++) {
    curArr = concat(curArr, letters[i])
  }
  return curArr
};

console.log(letterCombinations("2"));
