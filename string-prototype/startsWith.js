function startsWith(str, item, beginSearch) {
    if (str[beginSearch] === item || str[0] === item) return true;

    return false;
}

console.log(startsWith("abcdefghijk", "a")); // true
console.log(startsWith("abcdefghijk", "x")); // false
console.log(startsWith("abcdefghijk", "d", 3)); // true
//true, ignores parameters higher than str.length
console.log(startsWith("abcdefghijk", "a", 1234));
