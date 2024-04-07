/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    function moveL(arr) {
        let n = arr.length

        for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
            heapify(arr, n, i)
        }
    }

    function heapify(arr, n, i) {
        let largest = i
        let l = i * 2 + 1
        let r = i * 2 + 2
        if (l < n && arr[l] > arr[largest]) {
            largest = l
        }

        if (r < n && arr[r] > arr[largest]) {
            largest = r
        }
        if (largest !== i) {
            let temp = arr[i]
            arr[i] = arr[largest]
            arr[largest] = temp
            heapify(arr, n, largest)
        }
    }
    while (stones.length > 1) {
        moveL(stones)
        let x = stones.shift()
        moveL(stones)
        let y = stones.shift()
        let diff = Math.abs(x - y)
        if (diff > 0) stones.push(diff)
    }
    if (stones.length == 1) return stones[0];
    return 0
};

