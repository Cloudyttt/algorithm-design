// 节流 throttle
// 规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
function throttle(func, delay) {
    let prevTime = Date.now();
    return function (...args) {
        const context = this;
        let curTime = Date.now();
        if (curTime - prevTime > delay) {
            prevTime = curTime;
            func.call(context, ...args);
        }
    };
}
