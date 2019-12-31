var bubbleSort = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    for (var j = 1; j < arr.length - i; j++) {
      if (arr[j] < arr[j - 1]) {
        var temp = arr[j];
        arr[j] = arr[j - 1];
        arr[j - 1] = temp;
      }
    }
  }
  return arr;
};
var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArray = bubbleSort(arr);
console.log(sortedArray);
