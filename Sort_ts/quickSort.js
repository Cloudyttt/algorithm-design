// 在划分子问题时排序
var quickSort = function (arr) {
    if (arr.length < 2) {
        return arr;
    }
    var pivotIndex = Math.floor(arr.length / 2);
    var pivot = arr.splice(pivotIndex, 1)[0];
    var left = [];
    var right = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat([pivot]).concat(quickSort(right));
};
var quickSort2 = function (arr, left, right) {
    if (left < right) {
        var pivot = arr[right];
        var i = left - 1;
        var temp = void 0;
        for (var j = left; j <= right; j++) {
            if (arr[j] <= pivot) {
                i++;
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
        quickSort2(arr, left, i - 1);
        quickSort2(arr, i + 1, right);
    }
    return arr;
};
var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArray = quickSort2(arr, 0, arr.length - 1);
console.log(sortedArray);
