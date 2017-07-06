function apply(fn, thisArg, argsArray) {
    return fn.bind(thisArg)(...argsArray);
}

module.exports = apply;
