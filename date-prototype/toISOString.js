const toJSON = require('./toJSON');
const toUTCString = require('./toUTCString');

function toISOString(d) {
    // Converting to UTC before JSON will
    // remove the milliseconds, have to work around.
    const ms = String(Number(d)).slice(10, 13);
    
    d = toUTCString(d);
    d = toJSON(d);

    return d.slice(0, 20) + ms + 'Z';
}

module.exports = toISOString;
