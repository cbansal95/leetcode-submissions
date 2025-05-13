/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    const numMap = {}
    let i = 0
    while(i < numbers.length) {
        if(numMap[target - numbers[i]] !== undefined) {
            return [numMap[target - numbers[i]] + 1, i + 1]
        }
        numMap[numbers[i]] = i
        i++
    }
};