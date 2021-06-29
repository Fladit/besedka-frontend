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
}
