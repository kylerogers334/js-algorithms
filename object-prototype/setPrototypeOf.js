function setPrototypeOf(obj, proto) {
    obj.__proto__ = proto;
    return obj;
}

module.exports = setPrototypeOf;
