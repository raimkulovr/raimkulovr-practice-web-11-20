//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Shop from '@/pages/Shop'
import Product from '@/pages/Product'

//routering
export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/shop',
            name: 'shop',
            component: Shop
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        },
        {
            path: '/shop/:id',
            name: 'product',
            component: Product
        },

    ]
})