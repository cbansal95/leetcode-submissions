
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
    insertWord(word){
        let curr = this.root

        for(const c of word){
            if (curr.children[c] == undefined) {
                const newNode =  new TrieNode()
                curr.children[c] = newNode
                curr = newNode
            } else {
                curr = curr.children[c]
            }
        }

        curr.eow = true
    }

    longestPrefix(){
        let prefix = ""
        let curr = this.root
        while(Object.keys(curr.children).length == 1 && curr.eow == false){
            prefix = prefix+Object.keys(curr.children)[0]
            curr = curr.children[Object.keys(curr.children)[0]]
        }
        return prefix
    }
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    const newTrie = new Trie()
    for(const str of strs){
        if (str == "") return "";
        newTrie.insertWord(str)
    }
    return newTrie.longestPrefix()
};