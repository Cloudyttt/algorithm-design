/*
* mergeSort（归并排序）
* 平均时间复杂度: O(nlogn)
* 最坏时间复杂度: O(nlogn)
* 最好时间复杂度: O(nlogn)
* 空间复杂度: O(n)
* 是否稳定: 稳定
* */

// 合并两个有序数组
let merge = (left, right) => {
  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }

  while (left.length) {
    result.push(left.shift());
  }

  while (right.length) {
    result.push(right.shift());
  }
  return result;
}

//采用自上而下的递归方法
let mergeSort = arr => {
  let len = arr.length;
  if (len < 2) {
    return arr;
  }
  let middle = Math.floor(len / 2),
    left = arr.slice(0, middle),
    right = arr.slice(middle);
  return merge(mergeSort(left), mergeSort(right));
}


var arr = [6, 2, 1, 4, 3, 9, 5, 7, 8];
var sortedArray = mergeSort(arr);
console.log(sortedArray);
