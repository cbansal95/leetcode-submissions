/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    function sort(arr) {
        let n = arr.length

        for (let i = Math.floor(n / 2); i >= 0; i--) {
            heapify(arr, n, i)
        }
    for (var i = n - 1; i > 0; i--) {
        // Move current root to end
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    }

    function heapify(arr, n, i) {
        let largest = i
        let l = (2 * i) + 1
        let r = (2 * i) + 2

        if (l < n && arr[l] > arr[largest]) largest = l
        if (r < n && arr[r] > arr[largest]) largest = r

        if (largest != i) {
            let temp = arr[i]
            arr[i] = arr[largest]
            arr[largest] = temp

            heapify(arr, n, largest)
        }
    }
    sort(nums)
    console.log(nums)
    return nums[nums.length - (k)]
};