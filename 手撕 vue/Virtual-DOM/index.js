var el = require('./element.js');
// import el from './element';

var ul = el('div', { id: 'virtual-dom' }, [
    el('p', {}, ['Virtual DOM']),
    el('ul', { id: 'list' }, [
        el('li', { class: 'item' }, ['Item 1']),
        el('li', { class: 'item' }, ['Item 2']),
        el('li', { class: 'item' }, ['Item 3'])
    ]),
    el('div', {}, ['Hello World'])
]);

ulRoot = ul.render();
document.body.appendChild(ulRoot);

console.log(ulRoot);
