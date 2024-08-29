Array.prototype._reduce = function (Fn) {
    if (typeof Fn !== 'function') {
        return;
    } else {
        let arr = this;
        let result = 0;
        arr.forEach((val) => {
            result = Fn(result, val);
        });

        return result;
    }
};
