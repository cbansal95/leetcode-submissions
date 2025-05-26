class TreeNode{
    constructor(){
        this.children = {}
        this.eow = false
    }
}

var Trie = function() {
    this.root = new TreeNode()
};

/** 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    let curr = this.root

    for(const c of word){
        if(curr.children[c] == undefined){
            const newChild = new TreeNode
            curr.children[c] = newChild
            curr = newChild
        } else {
            curr = curr.children[c]
        }
    }
    curr.eow = true
};

/** 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word) {
    let curr = this.root

    for(const c of word){
        if(curr.children[c] == undefined) return false; else {
            curr = curr.children[c]
        }
    }
    return curr.eow
};

/** 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    let curr = this.root

    for(const c of prefix){
        if(curr.children[c] == undefined) return false; else {
            curr = curr.children[c]
        }
    }
    return true
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */