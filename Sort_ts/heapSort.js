// 调整堆
var heapify = function (array, x, len) {
    console.log(Object.prototype.toString.call(array));
    if (Array.isArray(array) && typeof x === 'number') {
        var l = 2 * x + 1;
        var r = 2 * x + 2;
        var largest = x;
        var temp = void 0;
        if (l < len && array[l] > array[largest]) {
            largest = l;
        }
        if (r < len && array[r] > array[largest]) {
            largest = r;
        }
        if (largest !== x) {
            temp = array[x];
            array[x] = array[largest];
            array[largest] = temp;
            heapify(array, largest, len);
        }
    }
    else {
        throw 'arr is not an Array or x is not a number!';
    }
};
var heapSort = function (array) {
    if (Array.isArray(array)) {
        // 建堆
        var heapSize = array.length;
        var temp = void 0;
        for (var i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
            heapify(array, i, heapSize);
        }
        // 堆排序
        for (var j = heapSize - 1; j >= 1; j--) {
            temp = array[0];
            array[0] = array[j];
            array[j] = temp;
            heapify(array, 0, --heapSize);
        }
        return array;
    }
    else {
        throw 'array is not an Array!';
    }
};
var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArray = heapSort(arr);
console.log(sortedArray);
