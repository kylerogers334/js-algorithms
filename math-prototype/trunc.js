function trunc(n) {
    n = String(n).split('.')[0];
    return Number(n);
}

console.log(trunc(123123.95));
console.log(trunc(4.95));
console.log(trunc(-4.95));
console.log(trunc("lkajsdf"));
console.log(trunc(-444.91235));