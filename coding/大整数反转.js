
var reverse = function(x) {
  x=x.toString()
  var str=x.split("").reverse().join("")
  str = parseInt(str)
  if(str>2**31-1) return 0
  return x < 0 ? -str:str;
};
console.log(reverse(-123))