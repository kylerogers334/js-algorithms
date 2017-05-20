function forEach(arr, fn) {
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i]);
    }
}

const myArr = [1,2,3,4,5];

forEach(myArr, (item) => { console.log(item); });
