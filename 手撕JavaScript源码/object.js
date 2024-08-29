const _objectCreate = (proto) => {
    if (typeof proto !== 'object' || proto === null) return;
    const fn = function () {};
    fn.prototype = proto;
    return new fn();
};
