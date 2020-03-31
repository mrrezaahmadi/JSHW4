var moment = require('moment-jalaali')
moment.loadPersian({dialect: 'persian-modern'})

console.log(moment('2020/3/2').format('jYYYY jMMMM jD, dddd'))

