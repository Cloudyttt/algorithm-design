var insertSort = function (arr) {
    for (var i = 1; i < arr.length; i++) {
        var j = i - 1;
        var key = arr[i];
        while (arr[j] > key && j >= 0) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
};
var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArray = insertSort(arr);
console.log(sortedArray);
