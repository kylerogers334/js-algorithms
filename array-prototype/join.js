function join(arr, separator=",") {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        if (i === arr.length - 1) separator = "";
        str += (arr[i] + separator);
    }
    return str;
}

const arr = ["1","2","3"];

console.log(join(arr, "..."));