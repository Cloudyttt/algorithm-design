/**
 * 特点1：接收一个可迭代对象
 * 特点2：传入的数据中可以是普通数据，也可以是Promise对象
 * 特点3：可迭代对象的promise是并行执行的
 * 特点4：保持输入数组的顺序和输出数组的顺序一致
 * 特点5：传入数组中只要有一个reject，立即返回reject
 * 特点6：所有数据resolve之后返回结果
 * @param {*} promiseArr
 */

function myPromiseAll(iterable) {
    return new Promise((resolve, reject) => {
        const promises = Array.from(iterable);
        const result = []; // 定义Promise对象resolve的数组
        let count = 0; // 定义一个计数器用来判断是否所有的promise执行完毕

        // 并发执行每一个promise
        for (let i = 0; i < promises.length; i++) {
            Promise.resolve(promises[i])
                .then((res) => {
                    result[i] = res;
                    count++;
                    if (count === promises.length) {
                        resolve(result);
                    }
                })
                .catch((err) => reject(err));
        }
    });
}
