/*
* shellSort（希尔排序）
* 最佳情况：T(n) = O(nlog2 n)
* 最坏情况：T(n) = O(nlog2 n)
* 平均情况：T(n) =O(nlog n)
* 空间复杂度: O(1)
* 是否稳定: 不稳定
* 先将整个待排序的记录序列分割成为若干子序列分别进行直接插入排序，具体算法描述：
* <1>. 选择一个增量序列t1，t2，…，tk，其中ti>tj，tk=1；
* <2>.按增量序列个数k，对序列进行k 趟排序；
* <3>.每趟排序，根据对应的增量ti，将待排序列分割成若干长度为m 的子序列，分别对各子表进行直接插入排序。仅增量因子为1 时，整个序列作为一个表来处理，表长度即为整个序列的长度。
* */
let shellSort = function (arr) {
  let len = arr.length, temp, gap = 1;
  // 动态定义间隔序列
  while (gap < len / 5) {
    gap = gap * 5 + 1;
  }
  for (gap; gap > 0; gap = Math.floor(gap / 5)) {
    for (let i = gap; i < len; i++) {
      temp = arr[i];
      for (let j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }
  }
  return arr;
}
