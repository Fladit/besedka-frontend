import TheRegistrationWindow from "@/components/TheRegistrationWindow";
import TheLoginWindow from "@/components/TheLoginWindow";
import VueRouter from "vue-router";
import TheAuthPage from "@/components/TheAuthPage";
import NotFoundError from "@/components/NotFoundError";
import TheUserPage from "@/components/TheUserPage";
import TheUserFriendsPage from "@/components/TheUserFriendsPage";
import TheUser from "@/components/TheUser";
import store from "@/plugins/Store/store";

const {username} = store.state.user

const routes = [
    {
        path: "",
        beforeEnter: function (to, from, next) {
          if (to.path === "" && username) next({path: `/${username}`})
          else next({name: "login"})
        },
    },
    {
        path: "/auth",
        component: TheAuthPage,
        children: [
            {path: "", redirect: {name: "login"}},
            {path: "registration", name: "registration", component: TheRegistrationWindow},
            {path: "login", name: "login", component: TheLoginWindow},
        ]
    },
    {
        path: "/:id",
        component: TheUser,
        children: [
            {path: "", component: TheUserPage},
            {path: "friends", component: TheUserFriendsPage}
        ],
    },
    {
        path: "*",
        component: NotFoundError,
    },
]

const myRouter = new VueRouter({
    routes,
    mode:"history",
})

export default myRouter
