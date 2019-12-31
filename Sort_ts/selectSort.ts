let selectSort = (arr: number[]): number[] => {
	for (let i: number = 0; i < arr.length; i++) {
		let index: number = i
		let min: number = arr[i]
		for (let j: number = i + 1; j < arr.length; j++) {
			if (arr[j] < min) {
				min = arr[j]
				index = j
			}
		}
		let temp = arr[i]
		arr[i] = min
		arr[index] = temp
	}
	return arr
}
let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArray: number[] = selectSort(arr)
console.log(sortedArray)
