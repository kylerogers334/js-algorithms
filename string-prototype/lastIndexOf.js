function lastIndexOf(str, toFind, fromIndex) {
    if (fromIndex > str.length || typeof fromIndex === "undefined") {
        fromIndex = str.length - 1;
    }
    
    if (fromIndex < 0) {
        fromIndex = 0;
    }

    for (let i = fromIndex; i >= 0; i--) {
        if (str[i] === toFind) return i;
    }
    
    return -1;
}

console.log(lastIndexOf("canal", "a")); // 3
console.log(lastIndexOf("canal", "x")); // -1
console.log(lastIndexOf("canal", "a", 2)); // 1
console.log(lastIndexOf("canal", "a", 0)); // -1