var findMedianSortedArrays = function(nums1, nums2) {
  if(nums1.length ===0){
      if(nums2.length % 2 === 0){
          return ((nums2[(nums2.length / 2)] + nums2[(nums2.length / 2 - 1)]) / 2).toFixed(1)
      } else {
          return nums2[(nums2.length - 1) / 2].toFixed(1)
      }
  }
  if(nums2.length === 0){
      if(nums1.length % 2 === 0){
          return ((nums1[(nums1.length / 2)] + nums1[(nums1.length / 2 - 1)]) / 2).toFixed(1)
      } else {
          return nums1[(nums1.length - 1) / 2].toFixed(1)
      }
  }
  let mainArr = []
  while(nums1.length && nums2.length){
      if(nums1[0]<nums2[0]){
          mainArr.push(nums1.shift())
      } else {
          mainArr.push(nums2.shift())
      }
      console.log('mainArr', mainArr)
  }
  while(nums1.length){
      mainArr.push(nums1.shift())
      console.log('mainArr', mainArr)
  }
  while(nums2.length){
      mainArr.push(nums2.shift())
      console.log('mainArr', mainArr)
  }
  let len = mainArr.length
  console.log('len', len)
  if(len % 2 === 0){
      return ((mainArr[(len / 2)] + mainArr[(len / 2 - 1)]) / 2).toFixed(1)
  } else {
      return mainArr[(len - 1) / 2].toFixed(1)
  }
};

console.log(findMedianSortedArrays([1,3],[2]))