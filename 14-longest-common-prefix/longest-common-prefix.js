/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    class TrieNode {
        constructor(end = false) {
            //this.key = key
            this.children = {}
            this.end = end
        }
    }

    class Trie {
        constructor() {
            this.root = new TrieNode()
        }

        insert(word) {
            let curr = this.root

            word.split('').forEach(char => {
                if (!(char in curr.children))
                    curr.children[char] = new TrieNode()
                curr = curr.children[char]
            });
            curr.end = true

        }
        search(word) {
            let curr = this.root
            word.split('').forEach((char, i) => {
                if (!(char in curr.children)) {
                    return false
                } else {
                    curr = curr.children[char]
                }
            })
            return curr.end
        }
        startsWith(word) {
            let curr = this.root
            word.split('').forEach((char, i) => {
                if (!(char in curr.children)) {
                    return false
                } else {
                    curr = curr.children[char]
                }
            })
            return true
        }
    }

    const trie = new Trie()

    let check = false
    strs.forEach(str => {
        if(str=="") check = true
        trie.insert(str)
    })
    if(check) return ""
    let curr = trie.root
    let prefix = ''
    while (Object.keys(curr.children).length == 1) {
        if(curr.end == true) break
        prefix = prefix.concat(Object.keys(curr.children)[0])
        curr = curr.children[Object.keys(curr.children)[0]]
    }
    return prefix
};