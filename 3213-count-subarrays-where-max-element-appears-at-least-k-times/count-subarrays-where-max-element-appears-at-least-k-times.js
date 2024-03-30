/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var countSubarrays = function (nums, k) {
    let p1 = 0, p2 = 0, count = 0, l = 0, out = 0
    let max = 0, sc = 1
    for (let num of nums) {
        if (num > max) {
            max = num
            sc = 1
        } else if (max == num) {
            sc++
        }
    }
    if (sc < k) return 0
    for (let r = 0; r < nums.length; r++) {
        if (nums[r] == max) count++

        while (count == k) {
            if (nums[l] == max) {
                count--
            }
            l++
        }
        console.log(l,r)
        out += l
    }
    return out
};