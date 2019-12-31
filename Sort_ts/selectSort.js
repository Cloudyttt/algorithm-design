var selectSort = function (arr) {
    for (var i = 0; i < arr.length; i++) {
        var index = i;
        var min = arr[i];
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < min) {
                min = arr[j];
                index = j;
            }
        }
        var temp = arr[i];
        arr[i] = min;
        arr[index] = temp;
    }
    return arr;
};
var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArray = selectSort(arr);
console.log(sortedArray);
