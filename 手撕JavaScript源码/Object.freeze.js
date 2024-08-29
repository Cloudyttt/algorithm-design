const _objectFreeze = (obj) => {
    for (let prop in obj) {
        if (typeof obj[prop] === 'object') {
            _objectFreeze(obj[prop]);
        } else {
            Object.defineProperty(obj, prop, {
                writable: false
            });
        }
    }
    Object.seal(obj);
};

function text() {
    const o = { name: 'z', fn: function () {} };
    _objectFreeze(o);
    o.name = 'g';
    o.fn = 1;
    o.o = 1;
    const result =
        o.name === 'z' && typeof o.fn === 'function' && o.o === undefined;
    return result;
}

const _objectFreeze2 = (object) => {
    // 补全代码
    for (let k in object) {
        if (typeof object[k] === 'object') {
            _objectFreeze(object[k]);
        } else {
            Object.defineProperty(object, k, {
                writable: false
            });
        }
    }
    Object.seal(object);
};
