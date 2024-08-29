const _isArray = function (val) {
    return Object.prototype.toString.call(val).slice(8, -1) === 'Array';
};

let result = _isArray([1]);
console.log(result);
