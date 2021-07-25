import {configuredAxios, pathEnum} from "@/utils/configuredAxios";

export class AuthService {
    static async login(payload) {
        return configuredAxios.post(pathEnum.auth.login, payload)
    }

    static async authentication(token) {
        return configuredAxios.post(pathEnum.auth.authentication, {},
                {headers: {Authorization: `Bearer ${token}`}})
    }

    static async registration(payload) {
        return configuredAxios.post(pathEnum.auth.registration, payload)
    }
}
