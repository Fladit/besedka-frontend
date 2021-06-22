const months = {
    JANUARY: 'JANUARY',
    FEBRUARY: 'FEBRUARY',
    MARCH: "MARCH",
    APRIL: "APRIL",
    MAY: "MAY",
    JUNE: "JUNE",
    JULY: "JULY",
    AUGUST: "AUGUST",
    SEPTEMBER: "SEPTEMBER",
    OCTOBER: "OCTOBER",
    NOVEMBER: "NOVEMBER",
    DECEMBER: "DECEMBER",
}

//FEBRUARY - days in year - 28, but every 4th year - 29
const monthsEnum = {
    [months.JANUARY]: {title: 'Январь', index: 0, maxDays: 31},
    [months.FEBRUARY]: {title: 'Февраль', index: 1, maxDays: 28},
    [months.MARCH]: {title: 'Март', index: 2, maxDays: 31},
    [months.APRIL]: {title: 'Апрель', index: 3, maxDays: 30},
    [months.MAY]: {title: 'Май', index: 4, maxDays: 31},
    [months.JUNE]: {title: 'Июнь', index: 5, maxDays: 30},
    [months.JULY]: {title: 'Июль', index: 6, maxDays: 31},
    [months.AUGUST]: {title: 'Август', index: 7, maxDays: 31},
    [months.SEPTEMBER]: {title: 'Сентябрь', index: 8, maxDays: 30},
    [months.OCTOBER]: {title: 'Октябрь', index: 9, maxDays: 31},
    [months.NOVEMBER]: {title: 'Ноябрь', index: 10, maxDays: 30},
    [months.DECEMBER]: {title: 'Декабрь', index: 11, maxDays: 31},
}

export {months, monthsEnum}
