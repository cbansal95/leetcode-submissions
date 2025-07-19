/**
 * @param {number} amount
 * @param {number[]} coins
 * @return {number}
 */
var change = function(amount, coins) {
    coins = coins.sort((a,b) => b - a)
    const coinMap = {}
    for (const coin of coins){
        coinMap[coin] = new Array(amount + 1).fill(0)
        coinMap[coin][0] = 1
    }
    for (let i = 0; i < coins.length; i++){
        for(let j = 1; j <= amount; j++ ){
            let currCoin = coins[i]
            let prevCoin = null
            let combos = 0
            if(i > 0) {prevCoin = coins[i-1]}

            if(j - currCoin >= 0){
                combos+=coinMap[currCoin][j - currCoin]
            }
            if(prevCoin != null){
                combos+=coinMap[prevCoin][j]
            }
            coinMap[currCoin][j] = combos
        }
    }
    return coinMap[coins[coins.length-1]][amount]
};