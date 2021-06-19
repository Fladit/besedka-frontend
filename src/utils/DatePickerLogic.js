let minYear = 1900;
let currentYear = 2021;
const dayOptions = fillArray(1, 31)
const monthOptions = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const yearOptions = fillArray(minYear, currentYear)

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











function fillArray (from, to) {
    const array = [];
    for (let i=from; i<=to; i++) {
        array.push((i).toString())
    }
    return array
}

export {dayPickerOptions, monthPickerOptions, yearPickerOptions}
