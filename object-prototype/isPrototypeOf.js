function isPrototypeOf(prototype, obj) {
    return obj.__proto__ === prototype;
}

module.exports = isPrototypeOf;
