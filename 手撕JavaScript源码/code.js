// 防抖
function debounce(fn, delay) {
  let timeout;
  return function(args) {
    let context = this;
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      fn.call(context, args);
    }, delay);
  };
}

// 回流
function throttle(fn, delay) {
  let preTime = Date.now();
  return function(args) {
    let context = this;
    let curTime = Date.now();
    if (curTime - preTime > delay) {
      fn.call(context, args);
      preTime = curTime;
    }
  };
}

Function.prototype.call = function(context, ...args) {
  context = context || window;
  context.fn = this;
  let result = context.fn(...args);
  delete context.fn;
  return result;
};

Function.prototype.apply = function(context, args) {
  context = context || window;
  context.fn = this;
  let result = context.fn(args);
  delete context.fn;
  return result;
};

Function.prototype.bind = function(context, ...args) {
  if (typeof this !== "function") {
    throw new TypeError(this + "is not a function.");
  }

  context = context || window;
  const fn = this;
  return function newFn(...newFunArgs) {
    if (this instanceof newFn) {
      return new fn(...args, ...newFnArgs);
    }
    return fn.call(context, ...args, ...newFnArgs);
  };
};

function deepCopy(target) {
  if (typeof target === "object") {
    let result = Array.isArray(target) ? [] : {};
    for (const key in target) {
      result[key] = deepCopy(target[key]);
    }
    return result;
  } else {
    return target;
  }
}
