import TheRegistrationWindow from "@/components/TheRegistrationWindow";
import TheLoginWindow from "@/components/TheLoginWindow";
import VueRouter from "vue-router";
import TheAuthPage from "@/components/TheAuthPage";
import NotFoundError from "@/components/NotFoundError";

const routes = [
    {
        path: "",
        redirect: {name: "login"},
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
        path: "*",
        component: NotFoundError,
    }
]

const myRouter = new VueRouter({
    routes,
    mode:"history",
})

export default myRouter
