function endsWith(str, item, maxSearch) {
    if (maxSearch < str.length) {
        if (str[maxSearch - 1] === item) {
            return true;
        }
        // endsWith("abcdefghijk", "k", 3)); would return true w/o this line.
        return false;
    }

    if (str[str.length - 1] === item) {
        return true;
    }

    return false;
}

console.log(endsWith("abcdefghijk", "k")); // true
console.log(endsWith("abcdefghijk", "x")); // false
console.log(endsWith("abcdefghijk", "d", 4)); // true
//true, ignores parameters higher than str.length
console.log(endsWith("abcdefghijk", "k", 1230));
