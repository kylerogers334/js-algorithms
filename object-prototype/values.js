function values(obj) {
    let a = [];
    
    for (let i in obj) {
        a.push(obj[i]);
    }
    
    return a;
}

var an_obj = { 100: 'a', 2: 'b', 7: 'c' };

console.log(values(an_obj))