function is(a, b) {
    if (a === b) {
        return (a !== 0 || 1 / a === 1 / b);
    }
    
    return (a !== a && b !== b);
}
 
const a = {a: "1"}
const a2 = {a: "1"}
console.log(is(a, a2))

Object.is(a, a2)