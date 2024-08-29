function _new(Con, ...args) {
    this.obj = {}; // 创建一个空的对象
    Object.setPrototypeOf(this.obj, Con.prototype); // 将空对象指向构造函数的原型链
    let result = Con.apply(this.obj, args); // obj绑定到构造函数上，便可以访问构造函数中的属性，即this.obj.Con(args)
    // 如果返回的result是一个对象则返回
    // new方法失效，否则返回obj
    return result instanceof Object ? result : this.obj;
}

/**
 * 我们首先知道new做了什么：
 * 1. 创建一个空对象 obj;
 * 2. 将新创建的空对象的隐式原型指向其构造函数的显示原型。
 * 3. 使用 call 改变 this 的指向
 * 4. 如果无返回值或者返回一个非对象值，则将 obj 返回作为新对象；如果返回值是一个新对象的话那么直接直接返回该对象。
 */
function create(Con, ...args) {
    const obj = {};
    Object.setPrototypeOf(obj, Con.prototype);
    const result = Con.call(obj, ...args);
    return result instanceof Object ? result : obj;
}

/**
 *
 * 创建了一个全新的对象。
 * 这个对象会被执行[[Prototype]]（也就是__proto__）链接。
 * 生成的新对象会绑定到函数调用的this。
 * 通过new创建的每个对象将最终被[[Prototype]]链接到这个函数的prototype对象上。
 * 如果函数没有返回对象类型Object(包含Function, Array, Date, RegExg, Error)，那么new表达式中的函数调用会自动返回这个新的对象。
 */
function _new(ctor, ...args) {
    if (typeof ctor !== 'function') {
        throw error;
    }
    let obj = Object.create(ctor.prototype);
    let result = ctor.call(obj, ...args);
    return result instanceof Object ? result : obj;
}
