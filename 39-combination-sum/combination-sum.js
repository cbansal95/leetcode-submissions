/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    let out = []

    function rec(i, curr, total){
        //define target
        if(total == target){
            out.push([...curr])
            return
        }
        if(total > target || i >= candidates.length) return
        //form next iterations
        curr.push(candidates[i])
        rec(i, curr, total + candidates[i])
        curr.pop()
        rec(i+1, curr, total)
    }
    rec(0, [], 0)
    return out
};