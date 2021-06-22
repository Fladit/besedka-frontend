let minYear = 1900;
let currentYear = 2021;
// Доделать enum с месяцами
const mouths = {
    JANUARY: 'JANUARY',
    FEBRUARY: 'FEBRUARY'
}
const monthsEnum = {
    JANUARY: {title: 'Январь', index: 0, maxDays: 31},
    FEBRUARY: {title: 'Февраль', index: 1, maxDays: 29},
    MARCH: {title: 'Март', index: 2, maxDays: 31},
    APRIL: {title: 'Апрель', index: 3, maxDays: 30},
    MAY: {title: 'Май', index: 4, maxDays: 31},
    JUNE: {title: 'Июнь', index: 5, maxDays: 30},
    JULY: {title: 'Июль', index: 6, maxDays: 31},
    AUGUST: {title: 'Август', index: 7, maxDays: 31},
    SEPTEMBER: {title: 'Сентябрь', index: 8, maxDays: 30},
    OCTOBER: {title: 'Октябрь', index: 9, maxDays: 31},
    NOVEMBER: {title: 'Ноябрь', index: 10, maxDays: 30},
    DECEMBER: {title: 'Декабрь', index: 11, maxDays: 31},
}
const dayOptions = fillOptionsArray(1, 31)
const monthOptions = []
for (const month in monthsEnum) {
    monthOptions.push({title: monthsEnum[month].title, value: month})
}
const yearOptions = fillOptionsArray(minYear, currentYear)

const dayPickerOptions = {
    title: "День",
    options: dayOptions,
}
const monthPickerOptions = {
    title: "Месяц",
    options: monthOptions,
}
const yearPickerOptions = {
    title: "Год",
    options: yearOptions,
}










function fillOptionsArray (from, to) {
    const array = [];
    for (let i=from; i<=to; i++) {
        const obj = {title: i.toString(), value: i.toString()}
        array.push(obj)
    }
    return array
}

export {dayPickerOptions, monthPickerOptions, yearPickerOptions, monthsEnum}
