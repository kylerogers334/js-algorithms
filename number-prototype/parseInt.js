function parseFloat(n) {
    try {
        if (typeof n !== 'string') throw new Error;
        return Number(n);
    } catch (error) {
        return NaN;
    }
}

console.log(parseFloat("123")); // 123
console.log(parseFloat("123.456")); // 123.456
console.log(parseFloat("-987654321")); // -987654321
console.log(parseFloat("asdfasdf")); // NaN
console.log(parseFloat(true)); // NaN
console.log(parseFloat(NaN)); // NaN