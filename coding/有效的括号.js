
var isValid = function(s) {
  var map = {
    "(": ")",
    "[": "]",
    "{": "}"
  };
  var leftArr = [];
  for (var ch of s) {
    if (ch in map) leftArr.push(ch);
    //为左括号时，顺序保存
    else {
      //为右括号时，与数组末位匹配
      if (ch != map[leftArr.pop()]) {
        return false;
      }
    }
  }
  return !leftArr.length; //防止全部为左括号
};
var isValid2 = function(s) {
  while (s.length) {
    var temp = s;
    s = s.replace("()", "");
    s = s.replace("[]", "");
    s = s.replace("{}", "");
    if (s == temp) return false;
  }
  return true;
};

console.log(isValid('{[]}()'))