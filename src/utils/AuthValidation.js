const axios = require("axios");

export class AuthValidation {
    static async validateUsername(username) {
        const answer = await axios.post("http://localhost:3000/api/v1/auth/existence", {username},
            {headers: {"Access-Control-Allow-Origin": "*"}})
        if (!answer.data) {
            return ""
        }
        else return "Данное имя уже занято"
    }
}
