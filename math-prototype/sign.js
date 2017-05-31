function sign(n) {
    if (n === 0) return n; // works for both 0 and -0
    
    if (isNaN(n)) return NaN;
    
    return (n > 0) ? 1 : -1;
}

console.log(sign(-0));
console.log(sign());
console.log(sign(2342));
console.log(sign(-123));
console.log(sign("-alksdfj"));