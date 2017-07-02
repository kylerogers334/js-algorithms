const toUTCString = require('./toUTCString');

function getUTCDay(d) {
    d = new Date(toUTCString(d));
    
    // Turn date into number of days in UNIX time.
    d = Math.floor(Number(d) / 86400000);
    
    while (d > 7) {
        d %= 7;
    }
    
    // Since UNIX time starts on a Thursday,
    // return value must be offset.
    switch (d) {
        case 3: return 0;
        case 4: return 1;
        case 5: return 2;
        case 6: return 3;
        case 0: return 4;
        case 1: return 5;
        case 2: return 6;
    }
    return d;
}

var x = new Date(2017, 3, 2)
console.log(x.getUTCDay());
console.log(getUTCDay(x))