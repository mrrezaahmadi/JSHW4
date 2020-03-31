const dateDifference = (dateOne, dateTwo) => {
    const year = Math.abs(dateOne.getFullYear() - dateTwo.getFullYear())
    const month = Math.abs(dateOne.getMonth() - dateTwo.getMonth()) - 1
    const day = dateOne.getDate() - dateTwo.getDate()
    const hour = dateOne.getHours() - dateTwo.getHours()
    const minutes = Math.abs(dateOne.getMinutes() - dateTwo.getMinutes())
    const second = Math.abs(dateOne.getSeconds() - dateTwo.getSeconds())

    return {
        year,
        month,
        day: day > 0 ? day : (month > 6 ? day + 31 : day + 30),
        hour: hour > 0 ? hour : hour + 24,
        minutes,
        second
    }
}

const dateOne = new Date('2020-08-01T12:22:41')
const dateTwo = new Date('2020-02-20T23:19:01')


console.log(dateDifference(dateOne, dateTwo))