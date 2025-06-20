/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = []

    for (const t of tokens){
        console.log(t)
        if (t == "+"){
            stack.push(stack.pop() + stack.pop())
        }
        else if(t == "*"){
            stack.push(stack.pop() * stack.pop())
        }
        else if(t == "/"){
            let a = stack.pop()
            let b = stack.pop()
            if(b/a >= 0) {
                stack.push(Math.floor(b/a))
            } else stack.push(Math.ceil(b/a))
            
        }
        else if(t == "-") {
            let a = stack.pop()
            let b = stack.pop()
            stack.push(b - a)
        }
        else {
            stack.push(Number(t))
        }
        console.log(stack)
    }
    return stack[0]
};