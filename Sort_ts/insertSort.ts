let insertSort = (arr: number[]): number[] => {
	for (let i: number = 1; i < arr.length; i++) {
		let j: number = i - 1
		let key: number = arr[i]
		while (arr[j] > key && j >= 0) {
			arr[j + 1] = arr[j]
			j--
		}
		arr[j + 1] = key
	}
	return arr
}

let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArray: Array<number> = insertSort(arr)
console.log(sortedArray)
