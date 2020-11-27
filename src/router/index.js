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
            path: '/search',
            component: Search,
        },
        {
            path: '/login',
            component: Login,
        },
        {
            path: '/register',
            component: Register,
        },
    ],
})
