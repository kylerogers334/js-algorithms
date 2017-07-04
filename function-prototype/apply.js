function apply(fn, thisArg, argsArray) {
    const args = arguments[2];
    return (fn.bind(thisArg))(...args);
}

module.exports = apply;
