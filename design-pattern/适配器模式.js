class Plug {
    getName() {
        return 'iphone充电头';
    }
}

class Target {
    constructor() {
        this.plug = new Plug();
    }
    getName() {
        return this.plug.getName() + ' 适配器Type-c充电头';
    }
}

let target = new Target();
target.getName(); // iphone充电头 适配器转Type-c充电头
