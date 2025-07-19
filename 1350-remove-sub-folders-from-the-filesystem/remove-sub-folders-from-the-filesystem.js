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
            if(curr.children[c] == undefined){
                const newChild = new TrieNode()
                curr.children[c] = newChild
                curr = newChild
            } else {
                curr = curr.children[c]
            }
        }
        curr.eow = true
    }
    hasPrefix(word){
        let curr = this.root
        for(let i = 0; i < word.length - 1; i++){
            curr = curr.children[word[i]]
            if (curr.eow == true) return true
        }
        return false
    }
}

/**
 * @param {string[]} folder
 * @return {string[]}
 */
var removeSubfolders = function(folder) {
    let out = []
    let trie = new Trie()
    for(const f of folder){
        let temp = f.split("/").slice(1)
        if(temp.length) trie.insert(temp)
    }
    for(const f of folder){
        let temp = f.split("/").slice(1)
        let res = trie.hasPrefix(temp)
        if(res == false) out.push("/" + temp.join("/"))
    }
    return out
};