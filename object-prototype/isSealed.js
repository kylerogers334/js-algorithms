function isSealed(obj) {
    'use strict';
    try {
        // throwing an error here means frozen
        // Object.isSealed(frozenObj) => true
        obj[Object.keys(obj)[0]] = 'something else';
        try {
            // checking if sealed and not frozen
            delete obj[Object.keys(obj)];
            return false;
        } catch (e) { 
            return true; 
        }
    } catch (e) {
        return true;
    }
}

console.log(isSealed(Object.freeze({a: '123'})))
console.log(isSealed({a: '123'}))