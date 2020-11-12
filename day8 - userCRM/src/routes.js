//default
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//pages
import Home from '@/pages/Home'
import NotFound from '@/pages/404'
import Users from '@/pages/Users'


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
            path: '/Users',
            name: 'users',
            component: Users
        },
        {
            path: '*',
            name: 'NotFound',
            component: NotFound
        }

    ]
})