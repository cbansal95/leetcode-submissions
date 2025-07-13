/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
    let wordMap = {}
    let wordHeap = new StringFreqHeap()
    let output = []
    for(const word of words){
        if(wordMap[word] == undefined) wordMap[word] = 0
        wordMap[word]++
    }
    for(const word of Object.keys(wordMap)){
        wordHeap.insert(word, wordMap[word])
    }
    for (let i = 0; i < k; i++){
        let temp = wordHeap.remove()
        output.push(temp.str)
    }

    return output

};

class StringFreqHeap{

    constructor(){
        this.heap = []
    }
    swap(a,b){
        let temp = this.heap[a]
        this.heap[a] = this.heap[b]
        this.heap[b] = temp
    }
    insert(str,freq){
        this.heap.push({
            str, freq
        })
        this.heapifyUp()
    }
    remove(){
        if(this.heap.length == 0) return null
        let temp = this.heap[0]
        this.heap[0] = this.heap.pop()
        this.heapifyDown()
        return temp
    }
    heapifyUp(){
        let curr = this.heap.length - 1
        while(curr > 0){
            let parent = Math.floor((curr - 1)/2)
            if(this.heap[parent].freq < this.heap[curr].freq){
                this.swap(parent,curr)
            } else if(this.heap[parent].freq == this.heap[curr].freq && this.heap[parent].str > this.heap[curr].str){
                this.swap(parent,curr)
            }
            curr = parent
        }

    }
    heapifyDown(curr = 0){
    let largest = curr;
    const left = 2 * curr + 1;
    const right = 2 * curr + 2;

    if (left < this.heap.length) {
        if (this.heap[left].freq > this.heap[largest].freq ||
           (this.heap[left].freq === this.heap[largest].freq &&
            this.heap[left].str < this.heap[largest].str)) {
            largest = left;
        }
    }

    if (right < this.heap.length) {
        if (this.heap[right].freq > this.heap[largest].freq ||
           (this.heap[right].freq === this.heap[largest].freq &&
            this.heap[right].str < this.heap[largest].str)) {
            largest = right;
        }
    }

    if (largest !== curr) {
        this.swap(curr, largest);
        this.heapifyDown(largest);
    }

    }
}