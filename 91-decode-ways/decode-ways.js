/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    if(!s || s[0] == "0") return 0;
    const dp = new Array((s.length) + 1).fill(0)
    dp[0] = 1
    dp[1] = 1
    
    for(let i = 2; i <= s.length; i++){
        const digitOne = parseInt(s[i-1])
        const digitTwo = parseInt(s.substring(i-2, i))

        if(digitOne != 0) dp[i]+=dp[i-1]
        if( 10 <= digitTwo && digitTwo <= 26) dp[i]+=dp[i-2]
    }
    return dp[s.length]
};