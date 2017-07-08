function split(str, sep='', limit=str.length) {
    if (sep === '') {
        return new Array(str);
    }

    const arr = [];
    const sepLen = sep.length;
    let tempStr = '';
    let tempLimit = 0;
    let j = 0;

    for (let i = 0; i < limit; i++) {
        if (str.slice(i, i + sepLen) === sep) {
            arr[j] = tempStr;
            tempLimit++;
            if (tempLimit === limit) {
                break;
            } // fix an issue with last item being ignored
            else if (i === limit - 1) {
                if (str[i] === sep) {
                    arr[j + 1] = '';
                } else {
                    arr[j] = arr[j] + str[i];
                } 
                break;
            }
            tempStr = '';
            j++;
            continue;
        }
        tempStr += str[i];
    }
    
    // no splits fix
    if (arr.length === 0) {
        return new Array(str);
    }
    
    return arr;
}

module.exports = split;
