function trimRight(str) {
    for (let i = str.length - 1; i > 0; i--) {
        if (str[i] !== " ") {
            var trimUpTo = str.length - (str.length - i);
            break;
        }
    }
    return str.substring(0, trimUpTo);
}

console.log(trimRight("   fooo  "));
console.log(trimRight("   foO x Oo  "));
console.log(trimRight("   foo  xxxxxx"));