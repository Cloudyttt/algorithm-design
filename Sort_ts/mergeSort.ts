// 在合并子问题时排序
let merge = (left: number[], right: number[]): number[] => {
	let result: number[] = []
	while (left.length && right.length) {
		if (left[0] <= right[0]) {
			result.push(left.shift())
		} else {
			result.push(right.shift())
		}
	}
	while (left.length) {
		result.push(left.shift())
	}
	while (right.length) {
		result.push(right.shift())
	}
	return result
}
let mergeSort = (arr: number[]): number[] => {
	let len: number = arr.length;
	if (len < 2) {
		return arr;
	}
	let mid: number = Math.floor(len / 2);
	let left: number[] = arr.slice(0, mid)
	let right: number[] = arr.slice(mid)
	return merge(mergeSort(left), mergeSort(right))
}


let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArray: number[] = mergeSort(arr)
console.log(sortedArray)

