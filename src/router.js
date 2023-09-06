import {createRouter, createWebHistory} from "vue-router";
import Index from "@/Pages/Index.vue";
import Quotes from "@/Pages/Quotes.vue";

let router;
export default router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        }
    ]
});