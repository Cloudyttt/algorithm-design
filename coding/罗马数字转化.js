var romanToInt = function(s) {
  let romanMap = new Map([
      ['I', 1],
      ['V', 5],
      ['X', 10],
      ['L', 50],
      ['C', 100],
      ['D', 500],
      ['M', 1000],
  ])

  let result = 0;
  let arr = s.split('')
  for(let i = 0; i < arr.length; i++){
      let num = romanMap.get(arr[i])
      if(arr[i] === 'I' && (arr[i + 1] === 'V' || arr[i + 1] === 'X') && arr[i + 1]){
          num = romanMap.get(arr[i + 1]) - 1
          console.log('num1', num, arr[i])
          i++
      }

      if(arr[i] === 'X' && (arr[i + 1] === 'L' || arr[i + 1] === 'C')&& arr[i + 1]){
          num = romanMap.get(arr[i + 1]) - 10
          console.log('num2', num, arr[i])
          i++
      }

      if(arr[i] === 'C' && (arr[i + 1] === 'D' || arr[i + 1] === 'M')&& arr[i + 1]){
          num = romanMap.get(arr[i + 1]) - 100
          console.log('num3', num, arr[i])
          i++
      }
      result += num
  }
  return result
};


console.log(romanToInt('IV'))