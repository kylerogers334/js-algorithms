function call(fn, thisArg) {
    const args = Array.from(arguments).slice(2);
    (fn.bind(thisArg))(...args);
}
