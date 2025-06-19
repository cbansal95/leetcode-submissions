/**
 * @param {string[][]} accounts
 * @return {string[][]}
 */
var accountsMerge = function(accounts) {
    const adj = {}
    const emailToName = {}
    for (const account of accounts){
        const name = account[0]
        for(let i = 1; i < account.length; i++){
            emailToName[account[i]] = name
            if (adj[account[i]] == undefined) adj[account[i]] = []
            if (i > 1){
                adj[account[i]].push(account[i-1])
                adj[account[i-1]].push(account[i])
            }
        }
    }

    const visited = {}
    const output = []

    for(const email of Object.keys(adj)){
        if(visited[email]) continue
        let stack = [email], emails = []
        while(stack.length) {
            const node = stack.pop()
            if(visited[node]) continue
            visited[node] = true
            emails.push(node)
            stack = [...stack, ...adj[node]]
        }
        emails.sort()
        output.push([emailToName[email], ...emails])
    }
    return output
};