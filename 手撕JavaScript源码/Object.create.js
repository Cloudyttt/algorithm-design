/**
 * Object.create 接受参数（object、null）
 * @param {*} proto
 * @returns
 */
const _objectCreate = (proto) => {
    if (typeof proto !== 'object' || proto === null) {
        return;
    }
    const Fn = function () {};
    Fn.prototype = proto;
    return new Fn();
};
