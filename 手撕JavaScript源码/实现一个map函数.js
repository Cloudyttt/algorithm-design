// var new_array = arr.map(function callback(currentValue[, index[,array) {}[, thisArg])

// arr.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])

// for循环实现
Array.prototype.myMap = function(callback, thisArg) {
  let arr = [];
  for (let i = 0; i < this.length; i++) {
    arr.push(callback.call(thisArg, this[i], i, this));
  }
  return arr;
};

// reduce实现
Array.prototype.myMap2 = function(callback, thisArg) {
  let result = this.reduce((accumulator, currentValue, index, array) => {
    accumulator.push(callback.call(thisArg, currentValue, index, array));
    return accumulator;
  }, []);
  return result;
};

let arr = [1, 2, 3, 4];
let result = arr.myMap2((val, index) => {
  return 2 * val;
});
console.log("TCL: result", result);
