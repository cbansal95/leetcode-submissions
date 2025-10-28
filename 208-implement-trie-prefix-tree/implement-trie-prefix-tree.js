class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    insert(word){
        let curr = this.root
        for (const c of word){
            if (curr.children[c] == undefined) {
                curr.children[c] = new TrieNode()
                curr = curr.children[c]
            } else curr = curr.children[c]
        }
        curr.isEndOfWord = true
    }
    startsWith(word){
        let curr = this.root
        for (const c of word){
            if (curr.children[c] == undefined) {
                return false
            } else curr = curr.children[c]
        }
        return true
    }
    search(word){
                let curr = this.root
        for (const c of word){
            if (curr.children[c] == undefined) {
                return false
            } else curr = curr.children[c]
        }
        return curr.isEndOfWord
    }
}
class TrieNode {
    constructor() {
        this.children = {};
        this.isEndOfWord = false;
    }
}