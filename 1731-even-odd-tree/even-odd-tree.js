/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isEvenOddTree = function (root) {
    let queue = [root]
    let level = 0
    let flag = true
    while (queue.length) {
        let temp = [...queue]
        queue = []
        if (level % 2 == 0) {
            //check odd
            //check increasing
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].val % 2 == 0) {
                    console.log(level, temp[i])
                    flag = false
                }
                if (i + 1 < temp.length && temp[i].val >= temp[i + 1].val) {
                    console.log(level, temp[i], temp[i+1])
                    flag = false
                }
                if(temp[i].left) queue.push(temp[i].left)
                if(temp[i].right) queue.push(temp[i].right)
            }
        } else if (level % 2 == 1) {
            //check even
            //check decreasing
            for (let i = 0; i < temp.length; i++) {
                if (temp[i].val % 2 == 1) {
                    console.log(level, temp[i])
                    flag = false
                    }
                if (i + 1 < temp.length && temp[i].val <= temp[i + 1].val) {
                    console.log(level, temp[i], temp[i+1])
                    flag = false
                    }
                if(temp[i].left) queue.push(temp[i].left)
                if(temp[i].right) queue.push(temp[i].right)
            }
        }
        level++
    }
    return flag

};