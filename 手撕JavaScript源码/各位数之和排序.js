function fun(num) {
  let result = 0;
  while (num) {
    result = result + (num % 10);
    num = Math.floor(num / 10);
  }
  return result;
}
function orderByWeight(input) {
  let strArr = input.split(" ");
  let result = [];
  let arr = strArr.map((val, index) => {
    return parseInt(val);
  });

  let s = arr.map((val, index) => {
    return fun(val);
  });
  console.log(s)
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (s[j] > s[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        temp = s[j];
        s[j] = s[j + 1];
        s[j + 1] = temp;
      }
    }
    
  }
  console.log(s)
  console.log(arr.toString().replace(/,/g, " "));
  return arr.toString().replace(/,/g, " ");
}
orderByWeight("56 65 74 100 99 68 86 180 90");
