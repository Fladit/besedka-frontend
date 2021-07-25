import Vue from "vue";
import Vuex from "vuex"
import {AuthService} from "@/utils/Auth/AuthService";
import jwtDecode from "jwt-decode";
import myRouter from "@/plugins/myRouter";

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        user: {
            username: '',
            firstName: 'Test',
            lastName: 'Chortov',
            avatar: '',
            birthDay: '',
            status: 'All good',
        }
    },
    getters: {
        isAuth: (state => !!state.user.username),
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setUsername(state, username) {
            state.user.username = username
        },

        setFirstName(state, firstName) {
            state.user.firstName = firstName
        },

        setLastName(state, lastName) {
            state.user.lastName = lastName
        },

        setAvatar(state, avatar) {
            state.user.avatar = avatar
        },

        setBirthDay(state, birthDay) {
            state.user.birthDay = birthDay
        },

        setStatus(state, status) {
            state.user.status = status
        }
    },
    actions: {
        async login(context, payload) {
            try {
                const response = await AuthService.login(payload)
                localStorage.setItem("token", response.data.accessToken)
                localStorage.setItem("refresh", response.data.refreshToken)
                const user = jwtDecode(response.data.accessToken)
                context.commit('setUser', user)
                await myRouter.push({path: `/${user.username}`})
            }
            catch (e) {
                throw e
            }
        },
        async registration(context, payload) {
            try {
                const response = await AuthService.registration(payload)
            }
            catch (e) {

            }
        },
        async authentication(context) {
            try {
                const response = await AuthService.authentication()
            }
            catch (e) {

            }
        }

    }
})

export default store
