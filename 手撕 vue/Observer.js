/**
 * @file Observer 监听器，监听对象属性值的变化
 */

import { Dep } from './Dep';
export class Observer {
    constructor(value) {
        this.value = value;
        this.walk(value);
    }
    // 遍历属性值并监听
    walk(value) {
        Object.keys(value).forEach((key) => this.convert(key, value[key]));
    }
    // 执行监听的具体方法
    convert(key, val) {
        defineReactive(this.value, key, val);
    }
}

function defineReactive(obj, key, val) {
    // 局部变量dep，用于get set内部调用
    const dep = new Dep();
    // 给当前属性的值添加监听
    let childOb = observe(val);
    Object.defineProperty(obj, key, {
        enumerable: true, // 设置当前描述属性为可被循环
        configurable: true, // 设置当前描述属性可被修改
        get: () => {
            // 如果Dep类存在target属性，将其添加到dep实例的subs数组中
            // target指向一个Watcher实例，每个Watcher都是一个订阅者
            // Watcher实例在实例化过程中，会读取data中的某个属性，从而触发当前get方法
            if (Dep.target) {
                dep.depend();
            }
            return val;
        },
        set: (newVal) => {
            if (val === newVal) return;
            val = newVal;
            // 对新值进行监听
            childOb = observe(newVal);
            // 当值发生变更时，通知依赖收集器，更新每个需要更新的Watcher，
            // 这里每个需要更新通过什么断定？dep.subs
            dep.notify();
        }
    });
}

function observe(value) {
    // 当值不存在，或者不是复杂数据类型时，不再需要继续深入监听
    if (!value || typeof value !== 'object') {
        return;
    }
    return new Observer(value);
}
