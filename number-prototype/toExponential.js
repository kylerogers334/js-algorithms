function toExponential(n, x=0) {
    let decimalPlaces = String(n).split('.')[0].length - 1;
    let str = String(n)
        .replace(/\./g, '')
        .split('');
        
    // Cannot chain on splice because
    // spice returns removed items.
    str.splice(1, 0 , '.'); 
    
    // e+decimalPlaces is auto appended for
    // large numbers.
    if (str.length > 17) {
        return str.join('');
    }
    
    return str 
        .join('')
        .concat(`e+${decimalPlaces}`);
}
const numObj = 801231239;
const numObj = 80123123912312312312123;

console.log(toExponential(801231239));
console.log(toExponential(80123123912312312312123));
