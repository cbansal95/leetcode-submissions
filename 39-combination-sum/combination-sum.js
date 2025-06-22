/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let out = []
    function rec(i, curr, total){
        if(total == target){
            out.push([...curr])
            return
        }
        if(i >= candidates.length || total > target) return
        curr.push(candidates[i])
        rec(i, curr, total + candidates[i])
        curr.pop()
        rec(i+1, curr, total)
    }

    rec(0,[],0)
    return out
};