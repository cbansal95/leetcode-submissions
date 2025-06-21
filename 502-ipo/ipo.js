class MaxHeap{
    constructor(){
        this.heap = []
    }
    insert(val){
        this.heap.push(val)
        this.heapifyUp()
        return
    }
    remove() {
        if(this.heap.length == 0) return null
        if(this.heap.length == 1) return this.heap.pop() 
        let temp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return temp
    }
    peek(){
        return this.heap[0]
    }
    swap(a,b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0) {
            const parentIndex = Math.floor((index-1)/2)
            if (this.heap[index] <= this.heap[parentIndex]) break
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    heapifyDown(){
        let index = 0
        while(true){
            let l = (2*index) + 1
            let r = (2*index) + 2
            let largest = index
            if(l < this.heap.length && this.heap[largest] < this.heap[l]){
                largest = l
            }
            if(r < this.heap.length && this.heap[largest] < this.heap[r]){
                largest = r
            }
            if (largest !== index){
                this.swap(largest, index)
                index = largest
            } else break
        }
    }
    size(){
        return this.heap.length
    }
}

class MinHeap{
    constructor(){
        this.heap = []
    }
    insert(val){
        this.heap.push(val)
        this.heapifyUp()
        return
    }
    remove() {
        if(this.heap.length == 0) return null
        if(this.heap.length == 1) return this.heap.pop() 
        let temp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return temp
    }
    peek(){
        return this.heap[0]
    }
    swap(a,b) {
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    heapifyUp(){
        let index = this.heap.length - 1
        while(index > 0) {
            const parentIndex = Math.floor((index-1)/2)
            if (this.heap[index][0] >= this.heap[parentIndex][0]) break
            this.swap(index,parentIndex)
            index = parentIndex
        }
    }
    heapifyDown(){
        let index = 0
        while(true){
            let l = (2*index) + 1
            let r = (2*index) + 2
            let largest = index
            if(l < this.heap.length && this.heap[largest][0] > this.heap[l][0]){
                largest = l
            }
            if(r < this.heap.length && this.heap[largest][0] > this.heap[r][0]){
                largest = r
            }
            if (largest !== index){
                this.swap(largest, index)
                index = largest
            } else break
        }
    }
    size(){
        return this.heap.length
    }
}

/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
    const capitalHeap = new MinHeap()
    const profitHeap = new MaxHeap()

    for(let i = 0; i < profits.length; i++){
        capitalHeap.insert([capital[i], profits[i]])
    }

    for(let i = 0; i < k; i++){
        while(capitalHeap.size() && capitalHeap.peek()[0] <= w){
            const [c,p] = capitalHeap.remove()
            profitHeap.insert(p)
        }
        if(profitHeap.size() == 0){
            break
        }
        w+=profitHeap.remove()
    }
    
    return w
};