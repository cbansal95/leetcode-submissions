/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    for (const p of s) {
        if (['(','{','['].includes(p)) {
            stack.push(p)
        } else {
            let curr = stack.pop()
            if (!curr) return false
            switch (p) {
                case ')': if (curr !== '(') return false; break
                case '}': if (curr !== '{') return false; break
                case ']': if (curr !== '[') return false; break
            }
        }
    }
    return stack.length === 0
};
