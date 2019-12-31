
/*
*
* 最佳情况：T(n) = O(n * k)
* 最差情况：T(n) = O(n * k)
* 平均情况：T(n) = O(n * k)
* 空间复杂度: O(n)
* 是否稳定: 不稳定
* */
/**
 * 基数排序适用于：
 *  (1)数据范围较小，建议在小于1000
 *  (2)每个数值都要大于等于0
 * @author xiazdong
 * @param  arr 待排序数组
 * @param  maxDigit 最大位数
 */
//LSD Radix Sort

let  radixSort = function(arr, maxDigit) {
  let mod = 10;
  let dev = 1;
  let counter = [];
  for (let i = 0; i < maxDigit; i++, dev *= 10, mod *= 10) {
    for(let j = 0; j < arr.length; j++) {
      let bucket = parseInt((arr[j] % mod) / dev);
      if(counter[bucket]== null) {
        counter[bucket] = [];
      }
      counter[bucket].push(arr[j]);
    }
    let pos = 0;
    for(let j = 0; j < counter.length; j++) {
      let value = null;
      if(counter[j]!=null) {
        while ((value = counter[j].shift()) != null) {
          arr[pos++] = value;
        }
      }
    }
  }
  return arr;
}
