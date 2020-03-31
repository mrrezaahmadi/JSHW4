const toTehran = (utcTime) => {
    const TehranOffset = utcTime.getTimezoneOffset()
    const TehranDate = utcTime.setMinutes(utcTime.getMinutes() - TehranOffset)
    return Date(TehranDate)
}
const now = new Date()

console.log(toTehran(now))
