function isExtensible(obj) {
    'use strict';
    try {
        obj.foo = 'bar';
        return true;
    } catch (e) {
        return false;
    }
}

console.log(isExtensible(Object.preventExtensions({a: '123'})))
console.log(isExtensible({a: '123'}))