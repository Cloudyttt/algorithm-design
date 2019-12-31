// 调整堆
let heapify = (arr: number[], x: number, len: number): void => {
	if (Array.isArray(arr) && typeof x === 'number') {
		let l: number = 2 * x + 1
		let r: number = 2 * x + 2
		let largest: number = x
		let temp: number
		if (l < len && arr[l] > arr[largest]) {
			largest = l
		}
		if (r < len && arr[r] > arr[largest]) {
			largest = r
		}
		if (largest !== x) {
			temp = arr[x]
			arr[x] = arr[largest]
			arr[largest] = temp
			heapify(arr, largest, len)
		}
	} else {
		throw 'arr is not an arr or x is not a number!'
	}
}


let heapSort = (arr: number[]): number[] => {
	if (Array.isArray(arr)) {
		// 建堆
		let heapSize: number = arr.length
		let temp: number

		// 最后一个非叶子结点开始往前调整
		for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
			heapify(arr, i, heapSize)
		}

		// 堆排序
		for (let j: number = heapSize - 1; j >= 1; j--) {
			temp = arr[0]
			arr[0] = arr[j]
			arr[j] = temp;
			heapify(arr, 0, --heapSize)
		}
		return arr
	} else {
		throw 'arr is not an arr!'
	}
}

let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArr: number[] = heapSort(arr)
console.log(sortedArr)
