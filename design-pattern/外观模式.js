function addEvent(el, type, fn) {
    if (el.addEventlistener) {
        // 高级游览器添加事件DOM API
        el.addEventListener(type, fn, false);
    } else if (el.attachEvent) {
        // 低版本游览器的添加事件API
        el.attachEvent(`on${type}`, fn);
    } else {
        //其他
        el[type] = fn;
    }
}

function bindEvent(el, type, selector, fn) {
    if (!fn) {
        fn = selector;
    }
    // 其他代码
    console.log(el, type, fn);
}
bindEvent(document.body, 'click', '#root', () => {});
bindEvent(document.body, 'click', () => {});
