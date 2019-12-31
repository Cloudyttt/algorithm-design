let shellSort = (arr: number[]): number[] => {
	let len: number = arr.length
	let gap: number = 1
	//动态定义间隔序列
	while (gap < len / 5) {
		gap = gap * 5 + 1
	}
	for (gap; gap > 0; gap = Math.floor(gap / 5)) {
		for (let i = gap; i < len; i++) {
			let temp: number = arr[i]
			let j: number

			// 组内调整
			for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
				arr[j + gap] = arr[j]
			}
			arr[j + gap] = temp
		}
	}
	return arr
}

let arr: number[] = [6, 2, 1, 4, 3, 9, 5, 7, 8]
let sortedArr: number[] = shellSort(arr)
console.log(sortedArr)
