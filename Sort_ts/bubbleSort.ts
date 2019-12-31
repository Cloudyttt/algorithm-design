let bubbleSort = (arr: number[]): number[] => {
	for (let i: number = 0; i < arr.length; i++) {
		for (let j: number = 1; j < arr.length - i; j++) {
			if (arr[j] < arr[j - 1]) {
				let temp: number = arr[j]
				arr[j] = arr[j - 1]
				arr[j - 1] = temp
			}
		}
	}
	return arr
}

let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArray: Array<number> = bubbleSort(arr)
console.log(sortedArray)
