/**
 * 功能:输入一个正整数，按照从小到大的顺序输出它的所有质因子（重复的也要列举）（如180的质因子为2 2 3 3 5 ）
 */
let num = 9;
let arr = [];
function getCode(num) {
    let i = 2;
    let temp = num;
    while (i < temp && i * i <= temp) {
        while (num % i == 0) {
            arr.push(i);
            num = num / i;
        }
        ++i;
    }
    if (num != 1) {
        arr.push(num);
    }
    return arr;
}

console.log(getCode(num));
