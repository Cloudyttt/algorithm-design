//给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。
var lengthOfLongestSubstring = function(s) {
  let arr = s.split("");
  let num = 0;
  let maxNum = 0;
  let subStr = [];
  arr.forEach(val => {
    if (subStr.indexOf(val) === -1) {
      subStr.push(val);
      num++;
      if(num > maxNum){
        maxNum = num
      }
    } else {
      subStr.push(val);
      subStr = subStr.splice(subStr.indexOf(val)+1)
      num = subStr.length;
    }
  });
  return maxNum;
};
// abcc
console.log(lengthOfLongestSubstring('nfpdmpi'))
