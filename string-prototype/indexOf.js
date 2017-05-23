function indexOf(val, fromIndex=0) {
    for (let i = fromIndex; i < this.length; i++) {
        if (this[i] === val) return val;
    }
    
    return -1;
}

console.log("abcdefg".indexOf("d")); // 3
console.log("abcdefg".indexOf("x")); // -1
console.log("abcdefg".indexOf("d", 4)); // -1
console.log("abcdefg".indexOf("d", 2)); // 3