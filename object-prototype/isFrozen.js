function isFrozen(obj) {
    'use strict';
    try {
        /* 
            Frozen is defined as not being able to add, delete, or modify
            properties of an object. Whereas sealed is defined as not being
            able to add or delete. This checks for frozen instead of sealed.
        */ 
        obj[Object.keys(obj)[0]] = 'something else';
        return false;
    } catch (e) {
        return true;
    }
}

console.log(isFrozen(Object.freeze({a: '123'})))
console.log(isFrozen({a: '123'}))