function isInteger(val) {
    return (Math.floor(val) === val && val !== Infinity && val !== -Infinity);
}

console.log(isInteger(1212323)); // true
console.log(isInteger(-980009123)); // true
console.log(isInteger(-5123123.1231)); // false
console.log(isInteger(NaN)); // false
console.log(isInteger(Infinity)); // false
console.log(isInteger(-Infinity)); // false
console.log(isInteger(true)); // false
console.log(isInteger(false)); // false
