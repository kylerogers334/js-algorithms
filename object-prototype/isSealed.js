function isSealed(obj) {
    'use strict';
    try {
        obj.reallyrandomassnamethatshouldntbetaken908908123 = 'bar';
        return false;
    } catch (e) { 
        return true; 
    }
}

module.exports = isSealed;
