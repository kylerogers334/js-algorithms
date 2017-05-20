function of() {
    const arr = [];
    
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    
    return arr;
}

console.log(of(1,2,3,4,5,6));