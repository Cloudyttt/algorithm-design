// 防抖 debounce
// 在事件被触发n秒后再执行回调，如果在这n秒内又被触发，则重新计时。
function debounce(func, delay) {
    let time = null;
    return function (...args) {
        const context = this;
        if (time) {
            clearTimeout(time);
        }
        time = setTimeout(() => {
            func.call(context, ...args);
        }, delay);
    };
}

// 使用
window.onscroll = debounce(function () {
    console.log('debounce');
}, 1000);

function sayHi() {
    console.log('Hello');
}

let fn = debounce(sayHi, 2000);

setInterval(() => {
    fn();
}, 200);

console.log('success');
