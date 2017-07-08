// of is a reserved word
function _of() {
    const arr = [];
    
    for (let i = 0; i < arguments.length; i++) {
        arr[i] = arguments[i];
    }
    
    return arr;
}

module.exports = _of;
