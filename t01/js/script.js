let date = new Date()
let getFormattedDate = (dateObject) => {
    let newDate = ""
    let options = {
        weekday: 'long',
    }
    let str = {
        day: dateObject.getDate(),
        month: dateObject.getMonth() + 1,
        year: dateObject.getFullYear(),
        hours: dateObject.getHours(),
        minutes: dateObject.getMinutes(),
        weekday: dateObject.toLocaleString('en-US', options),
    }
    if (str.day < 10) {
        str.day = "0" + str.day
    }
    if (str.month < 10) {
        str.month = "0" + str.month
    }
    if (str.hours < 10) {
        str.hours = "0" + str.hours
    }
    if (str.minutes < 10) {
        str.minutes = "0" + str.minutes
    }
    newDate += str.day + "." + str.month +
            "." + str.year + " " + str.hours + ":" +
            str.minutes + " " + str.weekday
    return newDate
}

const date0 = new Date(1993, 11, 1)
const date1 = new Date(1998, 0, -33)
const date2 = new Date('42 03:24:00')

console.log(getFormattedDate(date0))
console.log(getFormattedDate(date1))
console.log(getFormattedDate(date2))