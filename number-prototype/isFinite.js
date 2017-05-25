function isFinite(n) {
    return (typeof n === "number" && n !== Infinity && n !== -Infinity && isNaN(n) === false);
}

console.log(isFinite(NaN));