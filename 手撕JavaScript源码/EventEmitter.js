class Event {
  constructor() {
    this._cache = {};
  }
  on(type, callback) {
    this._cache[type] = this._cache[type] || [];
    let fns = this._cache[type];
    if (fns.indexOf(callback) === -1) {
      fns.push(callback);
    }
    return this;
  }
  emit(type, data) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      fns.forEach(fn => {
        fn.call(this, data);
      });
    }
    return this;
  }
  off(type, callback) {
    let fns = this._cache[type];
    if (Array.isArray(fns)) {
      if (callback) {
        let index = fns.indexOf(callback);
        if (index !== -1) {
          fns.splice(index, 1);
        } else {
          fns.length = 0;
        }
      }
    }
    return this;
  }
  once(type, callback) {
    let wrapFun = () => {
      callback.call(this);
      this.off(type, callback);
    };
    this.on(wrapFun, callback);
    return this;
  }
}
