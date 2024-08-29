console.log('script start');

async function async1() {
    await async2();
    console.log('async1');
}

async function async2() {
    console.log('async2');
}

async1();

setTimeout(() => {
    console.log('setTimeout');
}, 0);

new Promise((resolve) => {
    console.log('Promise');
    resolve();
})
    .then(() => {
        console.log('then1');
    })
    .then(() => {
        console.log('then2');
    });

console.log('script end');
