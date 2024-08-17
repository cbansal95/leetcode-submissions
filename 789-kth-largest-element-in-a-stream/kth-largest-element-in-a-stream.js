/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
    this.items = new Array(k).fill(-Infinity)
    for (let num of nums) {
        this.add(num)
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
    if (val > this.items[0]) {
        this.items[0] = val
        this.heapifyDown()
    }
    return this.items[0]
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */

KthLargest.prototype.heapifyDown = function () {
    let index = 0
    while (index < this.items.length && ((2 * index) + 1) < this.items.length) {
        let smallestChildIndex = (2 * index) + 1
        if (((2 * index) + 2) < this.items.length && this.items[((2 * index) + 2)] < this.items[smallestChildIndex]) {
            smallestChildIndex++
        } if (this.items[index] > this.items[smallestChildIndex]) {
            [this.items[index], this.items[smallestChildIndex]] = [this.items[smallestChildIndex], this.items[index]]
        }

        index = smallestChildIndex
    }
}