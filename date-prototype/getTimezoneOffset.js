function getTimezoneOffset(d) {
    const UTCOffSet = String(d).split(' ')[5].replace(/[a-zA-Z]/g, '');
    return  60 * (Number(UTCOffSet) / 100);
}

module.exports = getTimezoneOffset;
