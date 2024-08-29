Array.prototype._filter = function (Fn) {
    if (typeof Fn !== 'function') {
        return;
    } else {
        let arr = this;
        let result = [];
        arr.forEach((val) => {
            if (Fn(val)) {
                result.push(val);
            }
        });

        return result;
    }
};
