/**
 * 请补全JavaScript代码，完成"EventEmitter"类实现发布订阅模式。
 * 注意：
 * 1. 同一名称事件可能有多个不同的执行函数
 * 2. 通过"on"函数添加事件
 * 3. 通过"emit"函数触发事件
 */
class EventEmitter {
    constructor() {
        // 储存事件的数据结构，为查找迅速，使用对象（字典）
        this.events = {};
    }

    // 绑定
    on(type, callback) {
        // 为了按类查找方便和节省空间
        // 将同一类型事件放到一个数组中
        // 这里的数组是队列，遵循先进先出
        // 即新绑定的事件先触发
        if (!this.events[type]) {
            this.events[type] = [callback];
        } else {
            this.events[type].push(callback);
        }
        return this;
    }

    // 解绑
    off(type, callback) {
        if (!this.events[type]) {
            return;
        }

        if (callback) {
            this.events[type] = this.filter((fn) => {
                return fn != callback;
            });
        } else {
            // 全部清空
            this.events[type].length = 0;
        }

        return this;
    }
    // 触发emit
    emit(type, data) {
        if (this.events[type]) {
            this.events[type].forEach((fn) => {
                fn(data);
            });
        }

        return this;
    }

    // 一次性绑定
    once(type, callback) {
        let wrapFun = () => {
            callback.call(this);
            this.off(type, wrapFun); // 执行完以后立即解绑
        };
        this.on(type, wrapFun); // 绑定
        return this;
    }
}

let e = new EventEmitter();

e.on('click', function () {
    console.log('on');
});
// e.trigger('click', '666')
console.log(e);

class NewEventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, callback) {
        if (this.events[type]) {
            this.events[type].push(callback);
        } else {
            this.events[type] = [callback];
        }
    }

    off(type, callback) {
        if (callback) {
            this.events[type] = this.events[type].filter(
                (fn) => fn != callback
            );
        } else {
            this.events[type].length = 0;
        }
    }

    emit(type, data) {
        if (this.events[type]) {
            this.events[type].forEach((fn) => {
                fn(data);
            });
        }
    }

    once(type, callback) {
        const newFn = () => {
            callback.call(this);
            this.off(type, newFn);
        };
        this.on(type, newFn);
    }
}
