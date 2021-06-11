import axios from "axios";
const configuredAxios = axios.create({
    baseURL: "http://localhost:3000/api/v1",
    headers: {
        "Access-Control-Allow-Origin": "*"
    },
})

const pathEnum = {
    users: {
        init: "/users/init",
    },
    auth: {
        login: "/auth/login",
        authentication: "/auth/authentication",
        registration: "/auth/registration",
        existence: "/auth/existence",
    }
}

const configureHeaders = (headers) => {
    for (const header in headers) {
        configuredAxios.defaults.headers.post[header] = headers[header]
    }
}

export {configuredAxios, pathEnum, configureHeaders}
