import {configuredAxios, pathEnum} from "@/utils/configuredAxios";

export class AuthLogic {
    static async login(payload) {
        try {
            const response = await configuredAxios.post(pathEnum.auth.login, payload)
            console.log(response.data)
            return response.data
        }
        catch (e) {
            throw e
        }
    }

    static async authentication(token) {
        try {
            const response = await configuredAxios.post(pathEnum.auth.authentication, {},
                {headers: {Authorization: `Bearer ${token}`}})
            return response.data
        }
        catch (e) {
            throw e
        }
    }

    static async registration(payload) {
        try {
            const response = await configuredAxios.post(pathEnum.auth.registration, payload)
            return response.data
        }
        catch (e) {
            alert(e.message)
        }
    }
}
