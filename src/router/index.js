import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from '../views/Search'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            path: '/search/:seatchText?',
            component: Search,
        },
        {
            path: '/login',
            component: Login,
            meta: {
                isFooterShow: true,
            },
        },
        {
            path: '/register',
            component: Register,
            meta: {
                isFooterShow: true,
            },
        },
    ],
})
