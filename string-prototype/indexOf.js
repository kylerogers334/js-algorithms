function indexOf(str, val, fromIndex=0) {
    for (let i = fromIndex; i < str.length; i++) {
        if (str[i] === val) return i;
    }
    
    return -1;
}

module.exports = indexOf;
