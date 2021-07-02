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

const customRules = {
    usernameRules: {
        [rulesEnum.CAN_BE_EMPTY]: false,
        [rulesEnum.MIN_LENGTH]: 3,
        [rulesEnum.MAX_LENGTH]: 16,
    },
    passwordRules: {
        [rulesEnum.CAN_BE_EMPTY]: false,
        [rulesEnum.MIN_LENGTH]: 6,
        [rulesEnum.MAX_LENGTH]: 64,
    },
    nameRules: {
        [rulesEnum.CAN_BE_EMPTY]: false,
        [rulesEnum.MIN_LENGTH]: 2,
        [rulesEnum.MAX_LENGTH]: 32,
    },
    noEmptyRule: {
        [rulesEnum.CAN_BE_EMPTY]: false,
    }
}


export {rulesEnum, rulesError, customRules}
