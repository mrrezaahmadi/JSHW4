var moment = require('moment-jalaali')

const G2J = (date) => {
    return moment(date, 'YYYY/M/D').format('jYYYY/jM/jD')
}

console.log(G2J('2020/3/2'))