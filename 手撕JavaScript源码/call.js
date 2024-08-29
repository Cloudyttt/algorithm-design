// es5
Function.prototype.myCall = function (context) {
    context = context || window;
    context.fn = this; // 将函数挂载到对象的fn属性上
    const args = [...arguments].slice(1); // 处理传入的参数
    const result = context.fn(...args); // 通过对象的属性调用该方法
    delete context.fn; // 删除该属性
    return result;
};

// es6
Function.prototype.myCall = function (context, ...args) {
    context = context || window;
    const fn = this;
    context.fn = this;
    const result = context.fn(...args);
    delete context.fn;
    return result;
};
