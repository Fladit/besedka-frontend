import Vue from "vue";
import Vuex from "vuex"

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

    }
})

export default store
