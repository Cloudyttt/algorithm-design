let contrast = (str1, str2) => {
  // console.log("str1,str2", str1, str2, "\n");
  let result = "";
  let flag = true;
  if (str1.indexOf(str2) === 0) {
    return str2;
  }
  let strA = str1.split("");
  let strB = str2.split("");
  while (strA.length && strB.length && flag) {
    if (strA[0] === strB[0]) {
      result += strA.shift();
      strB.shift();
    } else {
      flag = false;
    }
  }
  // console.log("result", result);
  return result;
};
var longestCommonPrefix = function(strs) {
  if (strs.length === 0) {
    return "";
  }
  if (strs.length === 1) {
    return strs[0];
  }
  let substr = contrast(strs[0], strs[1]);
  // console.log('substr1 => ', substr)
  if (substr === "" || strs.length < 3) {
    return substr;
  }
  for (let i = 2; i < strs.length; i++) {
    substr = contrast(strs[i], substr);
  }
  return substr;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
