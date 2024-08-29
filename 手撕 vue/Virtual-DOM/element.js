/**
 * Element virtual-dom 对象定义
 * @param {String} tagName - dom 元素名称
 * @param {Object} props - dom 属性
 * @param {Array<Element|String>} - 子节点
 */
function Element(tagName, props, children) {
    this.tagName = tagName;
    this.props = props;
    this.children = children;
    // dom 元素的 key 值，用作唯一标识符
    if (props.key) {
        this.key = props.key;
    }
    var count = 0;
    children.forEach(function (child, i) {
        if (child instanceof Element) {
            count += child.count;
        } else {
            children[i] = '' + child;
        }
        count++;
    });
    // 子元素个数
    this.count = count;
}

function createElement(tagName, props, children) {
    return new Element(tagName, props, children);
}

/**
 * render 将virtual-dom 对象渲染为实际 DOM 元素
 */
Element.prototype.render = function () {
    var el = document.createElement(this.tagName);
    var props = this.props;
    // 设置节点的DOM属性
    for (var propName in props) {
        var propValue = props[propName];
        el.setAttribute(propName, propValue);
    }

    var children = this.children || [];
    children.forEach(function (child) {
        var childEl =
            child instanceof Element
                ? child.render() // 如果子节点也是虚拟DOM，递归构建DOM节点
                : document.createTextNode(child); // 如果字符串，只构建文本节点
        el.appendChild(childEl);
    });
    return el;
};

module.exports = createElement;
