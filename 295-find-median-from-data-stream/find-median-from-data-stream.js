class MedianFinder {
    //Initilize max and min heap
    constructor() {
        this.minHeap = new MinPriorityQueue() //supported by leetcode
        this.maxHeap = new MaxPriorityQueue()
    }

    addNum(num) {
        this.minHeap.enqueue(num);
        this.maxHeap.enqueue(this.minHeap.dequeue());
        if (this.minHeap.size() < this.maxHeap.size()) {
            this.minHeap.enqueue(this.maxHeap.dequeue());
        }
    }

    findMedian() {
        if (this.minHeap.size() > this.maxHeap.size()) // if one is bigger 21 and 345 example just pop from 345(min heap)
            return this.minHeap.front();
        else
            return (this.minHeap.front() + this.maxHeap.front()) / 2; // 21 and 34 example, pop 1 and 3 and find average

    }
}