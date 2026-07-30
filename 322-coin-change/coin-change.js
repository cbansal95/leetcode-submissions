/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let cache = {};

    function dfs(balance) {
        if (balance === 0) return 0;
        if (balance < 0) return Infinity;
        if (cache[balance] !== undefined) return cache[balance];

        let min = Infinity;
        for (const coin of coins) {
            let res = dfs(balance - coin);
            if (res !== Infinity) {
                min = Math.min(min, res + 1);
            }
        }
        cache[balance] = min;
        return min;
    }

    let ans = dfs(amount);
    return ans === Infinity ? -1 : ans;
};