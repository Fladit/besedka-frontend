import TheRegistrationWindow from "@/components/TheRegistrationWindow";
import TheLoginWindow from "@/components/TheLoginWindow";
import VueRouter from "vue-router";

const routes = [
    {path: "/registration", component: TheRegistrationWindow},
    {path: "/login", component: TheLoginWindow},
]

const myRouter = new VueRouter({
    routes,
    mode:"history",
})

export default myRouter
