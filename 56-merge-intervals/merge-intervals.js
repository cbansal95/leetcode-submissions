/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0])
    const merged = []
    let prev = intervals[0]

    for(let i = 1; i < intervals.length;i++){
        let curr = intervals[i]
        if(curr[0] <= prev[1]){
            prev[1] = Math.max(prev[1], curr[1])
        } else {
            merged.push(prev)
            prev = curr
        }
    }
    merged.push(prev)
    return merged
};