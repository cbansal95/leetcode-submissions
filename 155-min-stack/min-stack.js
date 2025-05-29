
var MinStack = function() {
    this.min = -Infinity
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    if (this.min == -Infinity) {
        this.min = val
        this.stack.push({val, min: val})
        return
    } 
    if (this.min > val ) this.min = val;
    this.stack.push({val, min: this.min})
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    const data = this.stack.pop()
    if (this.stack.length == 0) {this.min = -Infinity}
    else {
        const prevData = this.stack.at(-1)
        this.min = prevData.min
    }
    return data.val
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    const data = this.stack.at(-1)
    return data.val
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    const data = this.stack.at(-1)
    return data.min
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */