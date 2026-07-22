/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let max = 0, p1 = 0, p2 = height.length - 1
    while(p2>p1){
        let curr = (p2-p1)*(height[p2]>=height[p1] ? height[p1] : height[p2])
        if (curr > max) max = curr
        if (height[p2] < height[p1]) {p2--
        } else if (height[p2] >= height[p1]) {p1++
        } 
    }
    return max
};