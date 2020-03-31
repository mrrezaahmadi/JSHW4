const dateDifference = (dateOne, dateTwo) => {
    const year = Math.abs(dateOne.getFullYear() - dateTwo.getFullYear())
    const month = Math.abs(dateOne.getMonth() - dateTwo.getMonth()) - 1
    const day = dateOne.getDate() - dateTwo.getDate()
    const hour = dateOne.getHours() - dateTwo.getHours()
    const minutes = Math.abs(dateOne.getMinutes() - dateTwo.getMinutes())
    //const second = Math.abs(dateOne.getSeconds() - dateTwo.getSeconds())

    return {
        year,
        month,
        day: day > 0 ? day : (month > 6 ? day + 31 : day + 30),
        hour: hour > 0 ? hour : hour + 24,
        minutes
    }
}

const dates = [{
    start: new Date('2020-08-01T12:22'),
    end: new Date('2020-02-20T23:19')
}, {
    start: new Date('2019-02-20T20:12'),
    end: new Date('2019-06-14T16:54')
}]

const datesDifference = dates.map((date) => {
    return dateDifference(date.start, date.end)
})


let days = 0
let years = 0
let months = 0 
const result = datesDifference.forEach((date) => {
    years += date.year
    months += date.month
    days += date.day
})

console.log(`Years: ${years}, Months: ${months}, Days: ${days}`)



