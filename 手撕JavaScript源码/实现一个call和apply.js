// 实例
let foo = {
  value: 1
};
function bar() {
  console.log(this.value);
}
// bar.call(foo)

Function.prototype.myCall = function(context = window, ...params) {
  context.fn = this;
  const result = context.fn(...params);
  delete context.fn;
  return result;
};
Function.prototype.myApply = function(context = window, params = []) {
  context.fn = this;
  const result = context.fn(...params);
  delete context.fn;
  return result;
};

