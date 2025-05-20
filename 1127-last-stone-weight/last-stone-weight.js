class Heap {
    constructor(nums) {
        this.heap = nums
        this.buildHeap()
    }

    heapifyUp() {
        let index = this.heap.length - 1
        while (index > 0 && this.heap[index] > this.getParent(index)) {
            this.swap(index, Math.floor((index-1) / 2))
            index = Math.floor((index-1) / 2)
        }
    }
    heapifyDown(index) {
        let largest = index
        let left = (index * 2) + 1
        let right = (index * 2) + 2
        if (left < this.heap.length && this.heap[left] > this.heap[largest]) {
            largest = left
        }
        if (right < this.heap.length && this.heap[right] > this.heap[largest]) {
            largest = right
        }
        if (largest !== index) {
            this.swap(largest, index)
            this.heapifyDown(largest)
        }
    }
    swap(index1, index2) {
        let temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }
    hasParent(index) {
        const parentIndex = Math.floor((index - 1) / 2)
        if (parentIndex <= 0 || parentIndex > this.heap.length) return false
        return true
    }
    getParent(index) {
        return this.heap[Math.floor((index - 1) / 2)]
    }
    hasLeftChild(index) {
        const lcIndex = (index * 2) + 1
        return lcIndex < this.heap.length
    }
    getLeftChild(index) {
        return this.heap[(index * 2) + 1]
    }
    hasRightChild(index) {
        const rcIndex = (index * 2) + 2
        return rcIndex < this.heap.length
    }
    getRightChild(index) {
        return this.heap[(index * 2) + 2]
    }
    add(num) {
        this.heap.push(num)
        if(this.heap.length > 1) {
            this.heapifyUp(this.heap.length - 1)
        }
    }
    remove() {
        if (this.heap.length == 1) {
            let temp = this.heap[0]
            this.heap = []
            return temp
        }
        let temp = this.heap.pop()
        let temp2 = this.heap[0]
        this.heap[0] = temp
        this.heapifyDown(0)
        return temp2
    }
    size() {
        return this.heap.length
    }
    buildHeap() {
        for (let i = Math.floor(this.heap.length / 2) - 1; i >= 0; i--) {
            this.heapifyDown(i)
        }
    }
    getAll(){
        return this.heap
    }
}

/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    let stoneHeap = new Heap(stones)
    console.log(stoneHeap.getAll())
    while (stoneHeap.size() > 1) {
        let stone1 = stoneHeap.remove()
        let stone2 = stoneHeap.remove()
        console.log(stoneHeap.getAll(), Math.abs(stone1 - stone2))
        if (stone1 - stone2 != 0) {
            stoneHeap.add(Math.abs(stone1 - stone2))
        }
    }
    if (stoneHeap.size() == 1) return stoneHeap.getAll()[0]
    return 0
};