function call(fn, thisArg) {
    const args = Array.from(arguments).slice(2);
    return (fn.bind(thisArg))(...args);
}

module.exports = call;
