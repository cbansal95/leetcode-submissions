/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    function checkValid(current,target){
        const keys = Object.keys(target)
        let flag = true
        keys.forEach(key => {
            if(!current[key]) {
                flag = false
            } else if(current[key] < target[key]) flag = false
        })
        return flag
    }

    function checkBetterSol(best, candidate){
        if(best == "") return candidate
        if(candidate.length < best.length) return candidate
        return best
    }
    if(t.length > s.length) return ""
    let bestSolution = ""
    let target = {}


    for(let i = 0; i<t.length; i++){
        if (target[t[i]]) target[t[i]]++; else target[t[i]] = 1
    }

    // for(let p1 = 0; p1 < s.length; p1++){
    //     let p2 = p1
    //     let current = {}
    //     //build candidate string 
    //     let candidate = ""
    //     while(p2 < s.length){
    //         candidate = candidate.concat(s[p2])
    //         if(current[s[p2]]) current[s[p2]]++; else current[s[p2]] = 1
    //         console.log(candidate, current)
    //         //break if candidate valid or increment p2
    //         if(checkValid(current,target)){
    //             //compare candidate string length to best result
    //             bestSolution = checkBetterSol(bestSolution, candidate)
    //             break
    //         } else p2++
    //     }
    // }

    let p1 = 0, p2 = 0, candidate = s[p1], current = {} 
    current[s[p1]] = 1
    while(candidate){
        //console.log(bestSolution,candidate, current, p1,p2)
        if(checkValid(current,target)){
            //compare candidate string length to best result
            bestSolution = checkBetterSol(bestSolution, candidate)
            current[candidate[0]]--
            candidate = candidate.substring(1,)
            p1++
            
        } else {
            if(p2 + 1 < s.length) {
                p2++
                candidate = candidate.concat(s[p2])
                if(current[s[p2]]) current[s[p2]]++; else current[s[p2]] = 1
            } else {
                if(p2 == s.length-1 && (p2 - p1) < t.length) break
                if(candidate.length == s.length) break
                if(p2 == s.length-1 && !checkValid(current,target)) break
            }
        }

        
    }
    
    return bestSolution
};
