function flatten(arr) {
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            result = result.concat(flatten(arr[i]));
        } else {
            result = result.concat(arr[i]);
        }
    }

    return result;
}

const a = [1, [2, [3, 4]]];
console.log(flatten(a));
