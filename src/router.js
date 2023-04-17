import {createRouter, createWebHistory} from "vue-router";
import Index from "@/Pages/Index.vue";
import AddQuote from "@/components/AddQuote.vue";

let router;
export default router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Index
        },
        {
            path: '/add-quote',
            name: 'quote',
            component: AddQuote
        }
    ]
});