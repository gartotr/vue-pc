import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from '../views/Search'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/search',
            component: Search,
        },
    ],
})
