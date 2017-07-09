function propertyIsEnumberable(obj, prop) {
    const allProps = Object.getOwnPropertyNames(obj);

    const enums = [];
    for (let i in obj) {
        enums.push(i);
    }

    return allProps.includes(prop) && enums.includes(prop);
}

module.exports = propertyIsEnumberable;
