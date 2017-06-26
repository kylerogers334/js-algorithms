function assign() {
    const target = arguments[0];
    
    for (let i = 1; i < arguments.length; i++) {
        for (let j in arguments[i]) {
            target[j] = arguments[i][j];
        }
    }
    
    return target;
}

// const o1 = { a: 1, b: 1, c: 1 };
// const o2 = { b: 2, c: 2 };
// const o3 = { c: 3 };

// const obj = assign({}, o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }

// const o1 = { a: 1 };
// const o2 = { b: 2 };
// var o3 = { c: 3 };

// var obj = Object.assign(o1, o2, o3);
// console.log(obj); // { a: 1, b: 2, c: 3 }
// console.log(o1);