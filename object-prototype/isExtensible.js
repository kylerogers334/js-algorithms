function isExtensible(obj) {
    'use strict';
    try {
        obj.foo = 'bar';
        return true;
    } catch (e) {
        return false;
    }
}

module.exports = isExtensible;
