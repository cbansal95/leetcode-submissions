/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
    let out = []
    function dfs(root){
        if(root == null) {
            out.push(root)
            return
        }
        out.push(root.val)
        dfs(root.left)
        dfs(root.right)
    }
    dfs(root)
    return out
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
    let curr = 0
    function dfs(){
        if(data[curr] == null) {
            curr++
            return null
        }
        let head = new TreeNode(data[curr])
        curr++
        head.left = dfs()
        head.right = dfs()
        return head
    }
    return dfs()
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */