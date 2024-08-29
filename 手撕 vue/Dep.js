let uid = 0;
// 用于储存订阅者并发布消息
export class Dep {
    constructor() {
        // 设置id,用于区分新Watcher和只改变属性值后新产生的Watcher
        this.id = uid++;
        // 储存订阅者的数组
        this.subs = [];
    }
    // 绑定 Dep 与 Watcher的关系，触发target上的 Watcher 中的addDep方法，参数为dep的实例本身
    depend() {
        Dep.target.addDep(this);
    }
    // 添加订阅者
    addSub(sub) {
        this.subs.push(sub);
    }
    notify() {
        // 通知所有的订阅者(Watcher)，触发订阅者的相应逻辑处理
        this.subs.forEach((sub) => sub.update());
    }
}
// 为Dep类设置一个静态属性,默认为null,工作时指向当前的Watcher
Dep.target = null;
