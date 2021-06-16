import TheRegistrationWindow from "@/components/TheRegistrationWindow";
import TheLoginWindow from "@/components/TheLoginWindow";
import VueRouter from "vue-router";
import TheAuthPage from "@/components/TheAuthPage";
import NotFoundError from "@/components/NotFoundError";

const routes = [
    {
        path: "/auth",
        component: TheAuthPage,
        children: [
            {path: "", redirect: {path: 'login'}},
            {path: "registration", component: TheRegistrationWindow},
            {path: "login", component: TheLoginWindow},
        ]
    },
    {
        path: "*",
        component: NotFoundError,
    }
]

const myRouter = new VueRouter({
    routes,
    mode:"history",
})

export default myRouter
