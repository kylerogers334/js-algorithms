function isSafeInteger(int) {
    return (-(Math.pow(2, 53) - 1) < int && int < (Math.pow(2, 53) + 1));
}

console.log(isSafeInteger(5)); // true
console.log(isSafeInteger(-5)); // true
console.log(isSafeInteger(-590123018239345342342342345512390)); // false
console.log(isSafeInteger(590123018239345342342342345512390)); // false