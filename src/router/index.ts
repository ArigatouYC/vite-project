import { createRouter, createWebHashHistory} from "vue-router";

import login from '@/views/login/index.vue'
import home from '@/views/home/index.vue'
import err404 from '@/views/404/index.vue'

let router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/login",
            component: login,
        },
        {
            path: "/home",
            component: home,
        },
        {
            path: "/err404",
            component: err404,
        },
        {
            path: "/:pathMatch(.*)*",
            redirect: "/err404",
        }
    ]
});


export default router