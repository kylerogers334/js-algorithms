function apply(fn, thisArg, argsArray) {
    const args = arguments[2];
    console.log('args', args);
    return (fn.bind(thisArg))(...args);
}
