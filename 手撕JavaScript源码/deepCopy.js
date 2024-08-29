// 考虑循环引用
function clone(target, map = new WeakMap()) {
    if (typeof target === 'object' && target !== null) {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if (map.get(target)) {
            return target;
        }
        map.set(target, cloneTarget);
        for (const key in target) {
            cloneTarget[key] = clone(target[key], map);
        }
        return cloneTarget;
    } else {
        return target;
    }
}

// 不考虑循环引用
function clone(target) {
    if (typeof target === 'object') {
        const cloneTarget = {};
        for (const key in target) {
            cloneTarget[key] = clone(target[key]);
        }
        return cloneTarget;
    } else {
        return target;
    }
}
