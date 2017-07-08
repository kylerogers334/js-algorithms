function repeat(str, count) {
    // Cannot exceed the max string length.
    if (count < 0 || count > 1 << 28 ) {
        throw new RangeError('Invalid length');
    }
    
    count = Math.floor(count);
    let newStr = "";
    
    for (let i = 0; i++ < count;) {
        newStr += str;
    }
    
    return newStr;
}

module.exports = repeat;
