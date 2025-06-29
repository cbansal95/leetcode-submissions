class TrieNode{
    constructor(){
        this.children = {}
        this.eow = false
    }
}


class Trie{
    constructor(){
        this.root = new TrieNode()
    }
    insert(word){
        let curr = this.root
        for(const c of word){
            if(curr.children[c]){
                curr = curr.children[c]
            } else {
                const newNode = new TrieNode()
                curr.children[c] = newNode
                curr = curr.children[c]
            }
        }
        curr.eow = true
    }
    search(word){
        let curr = this.root
        for(const c of word){
            if(curr.children[c] == undefined) return false
            curr = curr.children[c]
        }
        return curr.eow
    }
    fuzzySearch(word){
        let res = false
        let curr = this.root
        function dfs(node, left){
            if(node == undefined) return
            if(left == ""){
                if(node.eow) res = true
                return
            }
            if(left[0] == '.'){
                for(let i = 0; i < 26; i++){
                    dfs(node.children[String.fromCharCode(i+97)], left.substring(1))
                }
            } else {
                dfs(node.children[left[0]], left.substring(1))
            }
        }
        dfs(curr, word)
        return res
    }
}

var WordDictionary = function() {
    this.trie = new Trie()
};

/** 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.trie.insert(word)
};

/** 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    return this.trie.fuzzySearch(word)
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */