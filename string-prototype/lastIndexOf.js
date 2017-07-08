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

module.exports = lastIndexOf;
