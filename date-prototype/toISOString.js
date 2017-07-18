const toJSON = require('./toJSON');
const toUTCString = require('./toUTCString');
const monthtoInt = require('./monthToInt');

function toISOString(d) {
    // Converting to UTC before JSON will
    // remove the milliseconds, have to work around.
    const ms = String(Number(d)).slice(10, 13).padStart(3, '0');
    const arr = String(d).split(' ');
    const formattedMonth = String(monthtoInt(arr[1]) + 1).padStart(2, '0');
    return  arr[3] + '-' +
            formattedMonth + '-' +
            arr[2] + 'T' + arr[4] + 
            '.' + ms + 'Z';
}

module.exports = toISOString;
