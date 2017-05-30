'use strict';
function min() {
    if (arguments.length === 0) return Infinity;
    try {
        let smallest = Infinity;
        for (let i = 0; i < arguments.length; i++) {
            if (arguments[i] < smallest) {
                smallest = arguments[i];
            }
        }
        return smallest;
    } catch (e) {
        return NaN;
    }
}

console.log(min(1,2,3,NaN,5,-980123));
console.log(min());