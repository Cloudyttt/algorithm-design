/*
* insertSort（插入排序）
* 平均时间复杂度: O(n2)
* 最坏时间复杂度: O(n2)
* 最好时间复杂度: O(n)
* 空间复杂度: O(1)
* 是否稳定: 稳定
* 插入排序（Insertion-Sort）的算法描述是一种简单直观的排序算法。
* 它的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。
* 插入排序在实现上，通常采用in-place排序（即只需用到O(1)的额外空间的排序），因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。
* */
let insertSort = arr => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = key;
  }
  return arr;
};


let insertSort2 = arr => {
  for (let i = 0; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;
    while (j > 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key;
  }
  return arr
};


let bubbleSort2 = arr => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length - i; j++) {
      if (arr[j - 1] > arr[j]) {
        let temp = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = temp
      }
    }
  }
};

let selectSort2 = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[0];
    let index = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j]
        index = j;
      }
    }
    let temp = arr[j]
    arr[index] = min;
    min = temp
  }
}
