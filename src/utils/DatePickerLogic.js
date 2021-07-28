import {monthsEnum} from "@/utils/monthsEnums";
let minYear = 1900;
let currentYear = 2021;
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
