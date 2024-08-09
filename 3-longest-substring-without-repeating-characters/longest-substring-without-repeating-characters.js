/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring1 = function (s) {

    if (s.length == 1 || s.length == 0) return s.length
    let start = 0, end = 1, max = 1
    let map = {}
    map[s[0]] = 0
    while (end < s.length) {
        if (map[s[end]] == undefined) {
            map[s[end]] = end
            let temp = Object.keys(map).length
            if (temp > max) max = temp
            end++
        } else {
            start = map[s[end]] + 1
            end = start + 1
            map = {}
            map[s[start]] = start
        }
    }
    return max
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let ans = 0;
    let count = new Array(256).fill(0);
    for (let i = 0, j = 0; i < s.length; i++) {
        count[s.charCodeAt(i)]++;
        while (count[s.charCodeAt(i)] > 1) {
            count[s.charCodeAt(j++)]--;
        }
        ans = Math.max(ans, i - j + 1);
    }
    return ans;
};