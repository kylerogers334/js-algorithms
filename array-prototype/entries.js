/* eslint indent: "off" */

function entries(array) {
    let nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               { value: [nextIndex++, array[nextIndex]], done: false } :
               { value: undefined, done: true };
       }
    };
}

module.exports = entries;
