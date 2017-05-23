function concat(str) {
    for (let i = 1; i < arguments.length; i++) {
        str += arguments[i];
    }
    return str;
}

console.log(concat("Hello ", "I'm ", "John."));