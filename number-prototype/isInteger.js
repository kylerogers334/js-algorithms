function isInteger(val) {
    return (Math.floor(val) === val && val !== Infinity && val !== -Infinity);
}

module.exports = isInteger;
