import {configuredAxios, pathEnum} from "@/utils/configuredAxios";

export class AuthPropertyValidation {
    static async validateUsername(username) {
        const answer = await configuredAxios.post(pathEnum.auth.existence, {username})
        if (!answer.data) {
            return ""
        }
        else return "Данное имя уже занято"
    }
    static validatePasswordRetry(password, passwordRetry) {
        if (password === passwordRetry)
            return ""
        return "Пароли не совпадают"
    }
    static validateEmail(email) {
        const emailRegularExpression = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
        if (email.match(emailRegularExpression))
            return ""
        return "Введён некорректный email"
    }
}
