/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
    sortedNums = nums.sort((a,b) => {
        if(a > b) return -1
        if(b > a) return 1
        if(b==1) return 0
    })
    console.log(sortedNums)
    return sortedNums[k-1]
};