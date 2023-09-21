import { createRouter, createWebHashHistory } from "vue-router";
import routes from './routes'
import routesPlus from "./routesPlus";

const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})

export default router