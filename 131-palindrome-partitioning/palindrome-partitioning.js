/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [], p = [];
    function rec(i, curr) {
        if (i >= s.length) {
            p.push([...curr]); // Add the current partition to the result
            // Test the partition
            let temp = checkStringPartition(curr,s)
            if(temp){
                res.push(temp)
            }
            return;
        }
        curr.push(i); // Include the current index in the partition
        rec(i + 1, curr); // Recurse with the index included
        curr.pop(); // Remove the current index from the partition
        rec(i + 1, curr); // Recurse without the index
    }
    rec(1, []); // Start with an empty partition
    console.log(p)
    return res;
};

var checkStringPartition = function(indices,s){
    let rem = s,strings = []
    for(let i = indices.length -1; i >=0; i--){
        let ind = indices[i]
        strings.unshift(rem.substring(ind,))
        rem = s.substring(0,ind)
    }
    console.log(rem)
    strings.unshift(rem)
    console.log(strings)
    for(let str of strings){
        if(checkPalindrome(str) == false) return false
    }

    return strings

}
function checkPalindrome(string) {
    const len = string.length;
    for (let i = 0; i < len / 2; i++) {
        if (string[i] !== string[len - 1 - i]) {
            return false;
        }
    }
    return true;
}

