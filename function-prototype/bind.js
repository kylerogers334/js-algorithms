function bind(fn, thisArg) {
    const args = Array.from(arguments).slice(1);
    const boundFn = function() { return fn.apply(thisArg, args); };
    boundFn.prototype = new function() {};
    return boundFn;
}

module.exports = bind;
