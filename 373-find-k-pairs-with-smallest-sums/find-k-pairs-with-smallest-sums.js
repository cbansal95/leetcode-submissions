class MinHeap{
    constructor(){
        this.heap = []
    }
    insert(a,b,i,j){
        this.heap.push({sum: a+b, val: [a,b], index: [i,j]})
        this.heapifyUp()
    }
    remove(){
        if(this.heap.length == 0) return null
        if(this.heap.length == 1) return this.heap.pop()

        let temp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return temp
    }
    heapifyDown(){
        let index = 0
        let length = this.heap.length
        while(true){
            let largest = index
            let l = (2*index)+1
            let r = (2*index)+2
            if(l < length && this.heap[l].sum < this.heap[largest].sum){
                largest = l
            }
            if (r < length && this.heap[r].sum < this.heap[largest].sum){
                largest = r
            }
            if(largest !== index){
                this.swap(largest, index)
                index = largest
            } else break
        }
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0){
            let parentIndex = Math.floor((index-1)/2)
            if (this.heap[parentIndex].sum > this.heap[index].sum){
                this.swap(parentIndex, index)
            }
            index = parentIndex
        }
    }
    swap(a,b){
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    size(){
        return this.heap.length
    }
}


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    if(!nums1.length || !nums2.length) return []
    const heap = new MinHeap()
    const output = []
    const visited = {}
    heap.insert(nums1[0], nums2[0], 0,0)
    visited[`0_0`] = true

    while(output.length < k && heap.size()){
        const curr = heap.remove()
        output.push(curr.val)

        if(curr.index[0] + 1 < nums1.length && !visited[`${curr.index[0] + 1}_${curr.index[1]}`]){
            heap.insert(nums1[curr.index[0] + 1], nums2[curr.index[1]], curr.index[0] + 1, curr.index[1])
            visited[`${curr.index[0] + 1}_${curr.index[1]}`] = true
        }

        if(curr.index[1]+1 < nums2.length && !visited[`${curr.index[0]}_${curr.index[1]+1}`]){
            heap.insert(nums1[curr.index[0]], nums2[curr.index[1]+1], curr.index[0], curr.index[1]+1)
            visited[`${curr.index[0]}_${curr.index[1]+1}`] = true
        }
    }
    return output
};