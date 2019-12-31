// 在划分子问题时排序
let quickSort = (arr: number[]): number[] => {
	if (arr.length < 2) {
		return arr
	}
	let pivotIndex: number = Math.floor(arr.length / 2)
	let pivot: number = arr.splice(pivotIndex, 1)[0]
	let left: number[] = []
	let right: number[] = []
	for (let i: number = 0; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i])
		} else {
			right.push(arr[i])
		}
	}
	return quickSort(left).concat([pivot]).concat(quickSort(right))
}

let quickSort2 = (arr: number[], left: number, right: number): number[] => {
	if (left < right) {
		let pivot: number = arr[right]
		let i: number = left - 1
		let temp: number
		for (let j: number = left; j <= right; j++) {
			if (arr[j] <= pivot) {
				i++
				temp = arr[i]
				arr[i] = arr[j]
				arr[j] = temp
			}
		}
		quickSort2(arr, left, i - 1)
		quickSort2(arr, i + 1, right)
	}
	return arr
}

let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArray: number[] = quickSort2(arr, 0, arr.length - 1)
console.log(sortedArray)
