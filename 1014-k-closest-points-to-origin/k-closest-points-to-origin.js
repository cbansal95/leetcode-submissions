/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
var kClosest = function (points, k) {
    let heap = new MaxHeap(k)
    for (const point of points) {
        heap.add(point)
    }
    return heap.getVal()
};
function distance(point){
    return Math.sqrt((point[0]**2) + (point[1]**2))
}
class MaxHeap{
    constructor(k){
        this.items = new Array(k).fill([Infinity,Infinity])
    }
    add(point){
        if(distance(point) < distance(this.items[0])){
            this.items[0] = point
            this.heapifyDown()
        }
    }
    heapifyDown(){
        let index = 0
        while(index < this.items.length){
            let l = index*2+1
            let r = l+1
            let largest = index

            if(l < this.items.length && distance(this.items[l]) > distance(this.items[largest])) largest = l
            if(r < this.items.length && distance(this.items[r]) > distance(this.items[largest])) largest = r

            if(largest !== index){
                let temp = this.items[index]
                this.items[index] = this.items[largest]
                this.items[largest] = temp
                index = largest
            } else break
        }
    }
    getVal(){
        return this.items
    }
}