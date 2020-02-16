// 给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  if (nums.length === 0) {
    return [];
  }
  let arr = nums.sort();
  console.log(arr);
  let result = [];
  for (let i = 0; i < arr.length - 2; i++) {
    if (arr[i] === arr[i - 1] && i > 0) {
      continue;
    }
    for (let j = i + 1; j < arr.length - 1; j++) {
      if (arr[j] === arr[j - 1] && j > i+1) {
        continue;
      }
      let sum = arr[i] + arr[j];
      let index = arr.lastIndexOf(-sum);
      if (index > j) {
        result.push([arr[i], arr[j], arr[index]]);
      }
    }
  }
  return result;
};
console.log(threeSum([0,0,0,0]));
