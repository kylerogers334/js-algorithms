function toJSON(d) {
    function monthToInt(m) {
        switch(m) {
            case 'Jan': return '01';
            case 'Feb': return '02';
            case 'Mar': return '03';
            case 'Apr': return '04';
            case 'May': return '05';
            case 'Jun': return '06';
            case 'Jul': return '07';
            case 'Aug': return '08';
            case 'Sep': return '09';
            case 'Oct': return '10';
            case 'Nov': return '11';
            case 'Dec': return '12';
        }
    }

    // Milliseconds have to be extracted before date is
    // coerced into a string.
    const ms    = String(Number(d)).slice(10, 13);
    d = String(d).split(' ');

    const dayTime = d[4].split(':');

    const year  = d[3];
    const month = monthToInt(d[1]);
    const day   = d[2];
    const hour  = dayTime[0];
    const min   = dayTime[1];
    const sec   = dayTime[2];

    return `${year}-${month}-${day}T${hour}:${min}:${sec}.${ms}Z`;
}

module.exports = toJSON;
