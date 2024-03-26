/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    for (i = 0; i < nums.length; i++) {
        if (nums[i] < 0) nums[i] = 0
    }

    for (i = 0; i < nums.length; i++) {
        let val = Math.abs(nums[i])
        if (val > 0 && val <= nums.length) {
            if (nums[val - 1] == 0) {
                nums[val - 1] = nums.length * -1
            } else if (nums[val - 1] > 0) {
                nums[val - 1] = nums[val - 1] * -1
            }
        }
    }
    console.log(nums)
    for (i = 0; i < nums.length; i++) {
        if (nums[i] >= 0) return i + 1
    }
    return nums.length + 1
};