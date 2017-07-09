function create(prototype, propertiesObject={}) {
    const newObj = new Object();
    // Object.setPrototyeOf(newObj, prototype) is also valid
    newObj.__proto__ = prototype;
    Object.defineProperties(newObj, propertiesObject);
    
    return  newObj;
}

module.exports = create;
