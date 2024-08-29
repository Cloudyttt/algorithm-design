// diff 函数，对比两棵树
function diff(oldTree, newTree) {
    var index = 0; // 当前节点的标志
    var patches = {}; // 用来记录每个节点差异的对象
    dfsWalk(oldTree, newTree, index, patches);
    return patches;
}

// 对两棵树进行深度优先遍历
function dfsWalk(oldNode, newNode, index, patches) {
    var currentPatch = [];
    if (typeof oldNode === 'string' && typeof newNode === 'string') {
        // 文本内容改变
        if (newNode !== oldNode) {
            currentPatch.push({ type: patch.TEXT, content: newNode });
        }
    } else if (
        newNode != null &&
        oldNode.tagName === newNode.tagName &&
        oldNode.key === newNode.key
    ) {
        // 节点相同，比较属性
        var propsPatches = diffProps(oldNode, newNode);
        if (propsPatches) {
            currentPatch.push({ type: patch.PROPS, props: propsPatches });
        }
        // 比较子节点，如果子节点有'ignore'属性，则不需要比较
        if (!isIgnoreChildren(newNode)) {
            diffChildren(
                oldNode.children,
                newNode.children,
                index,
                patches,
                currentPatch
            );
        }
    } else if (newNode !== null) {
        // 新节点和旧节点不同，用 replace 替换
        currentPatch.push({ type: patch.REPLACE, node: newNode });
    }

    if (currentPatch.length) {
        patches[index] = currentPatch;
    }
}

var ul1 = el('div', { id: 'virtual-dom' }, [
    el('p', {}, ['Virtual DOM']),
    el('ul', { id: 'list' }, [
        el('li', { class: 'item' }, ['Item 1']),
        el('li', { class: 'item' }, ['Item 2']),
        el('li', { class: 'item' }, ['Item 3'])
    ]),
    el('div', {}, ['Hello World'])
]);
var ul2 = el('div', { id: 'virtual-dom' }, [
    el('p', {}, ['Virtual DOM']),
    el('ul', { id: 'list' }, [
        el('li', { class: 'item' }, ['Item 21']),
        el('li', { class: 'item' }, ['Item 23'])
    ]),
    el('p', {}, ['Hello World'])
]);
var patches = diff(ul1, ul2);
console.log('patches:', patches);

function patch(node, patches) {
    var walker = { index: 0 };
    dfsWalk(node, walker, patches);
}

function dfsWalk(node, walker, patches) {
    // 从patches拿出当前节点的差异
    var currentPatches = patches[walker.index];

    var len = node.childNodes ? node.childNodes.length : 0;
    // 深度遍历子节点
    for (var i = 0; i < len; i++) {
        var child = node.childNodes[i];
        walker.index++;
        dfsWalk(child, walker, patches);
    }
    // 对当前节点进行DOM操作
    if (currentPatches) {
        applyPatches(node, currentPatches);
    }
}

function applyPatches(node, currentPatches) {
    currentPatches.forEach((currentPatch) => {
        switch (currentPatch.type) {
            case REPLACE:
                var newNode =
                    typeof currentPatch.node === 'string'
                        ? document.createTextNode(currentPatch.node)
                        : currentPatch.node.render();
                node.parentNode.replaceChild(newNode, node);
                break;
            case REORDER:
                reorderChildren(node, currentPatch.moves);
                break;
            case PROPS:
                setProps(node, currentPatch.props);
                break;
            case TEXT:
                node.textContent = currentPatch.content;
                break;
            default:
                throw new Error('Unknown patch type ' + currentPatch.type);
        }
    });
}
