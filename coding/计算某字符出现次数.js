/**
 * 写出一个程序，接受一个由字母、数字和空格组成的字符串，和一个字符，然后输出输入字符串中该字符的出现次数。（不区分大小写字母）
 */
let str = 'ABCabc';
let char = 'A';

function getCharNum(str, char) {
    let count = 0;
    str.toLocaleLowerCase()
        .split('')
        .forEach((val) => {
            if (char.toLocaleLowerCase() === val) {
                count++;
            }
        });
    return count;
}

console.log(getCharNum(str, char));
