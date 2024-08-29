// 第一周：28 = (1+7) * 7 / 2
// 第二周：35 = (2+8) * 7 / 2
// 第三周：42 = (3+9) * 7 / 2
// 第n周: x = 28 + (n-1) * 7
function fn(n) {
    let result = 0; // 计算结果
    let week = Math.floor(n / 7); //  周数
    let startNum = week; // 起始金额
    let beforeSum = 28 + (n - 1) * 7; // 完整周数
    let leftDay = n % 7; // 本周攒钱天数
    let finalSum = ((startNum + startNum + leftDay) * leftDay) / 2;
    result = beforeSum + finalSum;
    return result;
}
