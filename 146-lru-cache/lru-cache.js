class Node {
    constructor(key, value) {
        this.key = key
        this.val = value
        this.prev = null
        this.next = null
    }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    //create new hashmap
    this.cache = new Map()
    this.capacity = capacity
    this.left = new Node(0,0)
    this.right = new Node(0,0)
    this.left.next = this.right
    this.right.prev = this.left
};
LRUCache.prototype.remove = function (queryRes){
    let prev = queryRes.prev
    let next = queryRes.next

    prev.next = next
    next.prev = prev
}
LRUCache.prototype.insert = function (node){
    let prev = this.right.prev
    let next = this.right

    prev.next = node
    node.next = this.right

    this.right.prev = node
    node.prev = prev
}
/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    //lookup hashmap
    let queryRes = this.cache.get(key)
    if (queryRes)  {
        //console.log('moving '+queryRes.key)
        this.remove(queryRes)
        this.insert(queryRes)
        return queryRes.val
    } else return -1
    //move node to right end of LL
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    //if key exists then update
    let queryRes = this.cache.get(key)
    if (queryRes) {
        //console.log('updated '+queryRes.key)
        this.remove(queryRes)
        this.insert(queryRes)
        queryRes.val = value
        return null
    };
    if(this.cache.size < this.capacity) {
        //simple insert
        let newNode = new Node(key,value)
        this.cache.set(key,newNode)
        //add to right
        //console.log("adding " + newNode.key)
        this.insert(newNode)
    } else {
        //console.log("deleting " + this.left.next.key)
        this.cache.delete(this.left.next.key)
        this.remove(this.left.next)
        let newNode = new Node(key,value)
        this.cache.set(key,newNode)
        //console.log("adding " + newNode.key)
        this.insert(newNode)
    //evict least recently used key
    //add node to right end of LL
    }



};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */