function makeIterator(array) {
    let nextIndex = 0;
    
    return {
       next: function() {
           return nextIndex < array.length ?
               { value: nextIndex++, done: false } :
               { value: undefined, done: true };
       }
    };
}

