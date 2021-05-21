const rulesEnum = {
    MIN_LENGTH: "minLength",
    MAX_LENGTH: "maxLength",
    CAN_BE_EMPTY: "canBeEmpty"
}

const rulesError = {
    [rulesEnum.MIN_LENGTH]: (minLength) => `Минимальная длина содержимого: ${minLength}`,
    [rulesEnum.MAX_LENGTH]: (maxLength) => `Максимальная длина содержимого: ${maxLength}`,
    [rulesEnum.CAN_BE_EMPTY]: () => "Поле не должно быть пустым",
}

export {rulesEnum, rulesError}
