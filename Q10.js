var moment = require('moment')


const addMinute = (time, minutes) => {
    time.add(minutes, 'minutes')
    return time.toString()
}

console.log(addMinute(moment('2014-11-02'), 30))