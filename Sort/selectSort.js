/*
* selectSort（选择排序）
* 平均时间复杂度: O(n2)
* 最坏时间复杂度: O(n2)
* 最好时间复杂度: O(n2)
* 空间复杂度: O(1)
* 是否稳定: 不稳定
* */
let selectSort = arr => {
  for (let i = 0; i < arr.length; i++) {
    let min = arr[i]; // 初始化最小值为第一个元素
    let index = i; // 最小值下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) { // 发现更小的数则交换位置
        min = arr[j];
        index = j;
      }
    }
    // 将当前趟最小值移动至其最终位置
    let temp = arr[i];
    arr[i] = min;
    arr[index] = temp;
  }
};
