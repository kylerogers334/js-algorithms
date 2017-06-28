function propertyIsEnumberable(obj, prop) {
    const allProps = Object.getOwnPropertyNames(obj);

    const enums = [];
    for (let i in obj) {
        enums.push(i);
    }

    return allProps.includes(prop) && enums.includes(prop);
}

// const myobj = {};

// Object.defineProperties(myobj, {
//     'a' : {
//         value: 1,
//         enumerable: false
//     }, 
//     'b' : {
//         value: 2,
//         enumerable: true
//     },
//     'c' : {
//         value: 3,
//         enumerable: false
//     }
// })

// console.log(propertyIsEnumberable(myobj, 'q'));

// console.log(myobj.propertyIsEnumerable('q'))