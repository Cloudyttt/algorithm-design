var shellSort = function (arr) {
    var len = arr.length;
    var gap = 1;
    //动态定义间隔序列
    while (gap < len / 5) {
        gap = gap * 5 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 5)) {
        for (var i = gap; i < len; i++) {
            var temp = arr[i];
            var j = void 0;
            for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
                arr[j + gap] = arr[j];
            }
            arr[j + gap] = temp;
        }
    }
    return arr;
};
var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArr = shellSort(arr);
console.log(sortedArr);
