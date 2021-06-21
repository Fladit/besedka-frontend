let minYear = 1900;
let currentYear = 2021;
const months = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'];
const dayOptions = fillOptionsArray(1, 31)
const monthOptions = []
months.forEach((value, index) => {
    monthOptions.push({title: value, value: index})
})
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

console.log(dayOptions, monthOptions, yearOptions)










function fillOptionsArray (from, to) {
    const array = [];
    for (let i=from; i<=to; i++) {
        const obj = {title: i.toString(), value: i.toString()}
        array.push(obj)
    }
    return array
}

export {dayPickerOptions, monthPickerOptions, yearPickerOptions}
