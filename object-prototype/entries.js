function entries(obj) {
    const arr = [];
    
    for (let i in obj) {
        arr.push([i, obj[i]]);
    }
    
    return arr;
}

const obj = { foo: 'bar', baz: 42 };
console.log(entries(obj))