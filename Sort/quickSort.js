/*
* quickSort（快速排序）
* 最佳情况：T(n) = O(nlogn)
* 最差情况：T(n) = O(n2)
* 平均情况：T(n) = O(nlogn)
* 空间复杂度: O(1)
* 是否稳定: 不稳定
* 快速排序使用分治法来把一个串（list）分为两个子串（sub-lists）。具体算法描述如下：
* <1>.从数列中挑出一个元素，称为 "基准"（pivot）；
* <2>.重新排序数列，所有元素比基准值小的摆放在基准前面，所有元素比基准值大的摆在基准的后面（相同的数可以到任一边）。在这个分区退出之后，该基准就处于数列的中间位置。这个称为分区（partition）操作；
* <3>.递归地（recursive）把小于基准值元素的子数列和大于基准值元素的子数列排序。
* */

/*方法说明：快速排序
 @param  array 待排序数组
*/
//方法一
let quickSort = (array, left, right) => {
  if (Array.isArray(array) && typeof left === 'number' && typeof right === 'number') {
    if (left < right) {
      let x = array[right], i = left - 1, temp;
      for (let j = left; j <= right; j++) {
        if (array[j] <= x) {
          i++;
          temp = array[i];
          array[i] = array[j];
          array[j] = temp;
        }
      }
      quickSort(array, left, i - 1);
      quickSort(array, i + 1, right);
    }
    return array;
  } else {
    return 'array is not an Array or left or right is not a number!';
  }
}

//方法二
let quickSort2 = arr => {
  if (arr.length <= 1) {
    return arr;
  }
  let pivotIndex = Math.floor(arr.length / 2);
  let pivot = arr.splice(pivotIndex, 1)[0];
  let left = [];
  let right = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort2(left).concat([pivot], quickSort2(right));
};

let quickSort3 = array => {
  let pivot = array[array.length - 1]
  let left = array.filter((v, i) => v <= pivot && i != array.length -1)
  let right = array.filter(v => v > pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}


let arr = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArray = quickSort2(arr)
console.log(sortedArray)



