function copyWithin(arr, target, start=0, end=arr.length) {
    const len = arr.length;

    target = target < 0 ?
        Math.max(len + target, 0) :
        Math.min(target, len);

    start = start < 0 ?
        Math.max(len + start, 0) :
        Math.min(start, len);

    end = end < 0 ?
        Math.max(len + end, 0) :
        Math.min(end, len);

    let count = Math.min(end - start, len - target);
    let direction = 1;

    if (start < target && target < (start + count)) {
        direction = -1;
        start += count - 1;
        target += count - 1;
    }

    while (count > 0) {
        if (start in arr) {
            arr[target] = arr[start];
        } else {
            delete arr[target];
        }
        
        start += direction;
        target += direction;
        count--;
    }

    return arr;
}

module.exports = copyWithin;
