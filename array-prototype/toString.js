// Same function as Array.prototype.join() without a parameter.

function toString(arr) {
    let comma = ",";
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) comma = "";
        str += (arr[i] + comma);
    }
    return str;
}

const arr = ["1","2","3"];

console.log(toString(arr));