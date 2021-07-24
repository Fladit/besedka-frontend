import {configuredAxios, pathEnum} from "@/utils/configuredAxios";
import jwtDecode from "jwt-decode";

export class AuthLogic {
    static async login(payload) {
        try {
            const response = await configuredAxios.post(pathEnum.auth.login, payload)
            localStorage.setItem("token", response.data.accessToken)
            localStorage.setItem("refresh", response.data.refreshToken)
            return jwtDecode(response.data.accessToken)
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

    static logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("refresh")
    }
}
