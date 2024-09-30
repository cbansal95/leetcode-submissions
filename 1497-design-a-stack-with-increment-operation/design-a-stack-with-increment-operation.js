class CustomStack {
    constructor(maxSize) {
        this.stack = []
        this.maxSize = maxSize
    }

    push(item) {
        if (this.stack.length < this.maxSize) {
            this.stack.push(item)
        }
    }

    pop() {
        if (this.stack.length) return this.stack.pop()
        return -1
    }


    increment(k, val) {
        for (let i = 0; i < k; i++){
            if (this.stack[i] == undefined) break
            this.stack[i] = this.stack[i] + val 
        }
    }
}