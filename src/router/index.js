import Vue from 'vue'
import VueRouter from 'vue-router'

import Search from '../views/Search'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'

/* const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

// 重新定义push不传参数导致报错
VueRouter.prototype.push = function(location, onComplete, onAbort) {
    if (onComplete && onAbort) push.call(this, location, onComplete, onAbort)

    return push.call(this, location, onComplete, () => {})
}

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
    if (onComplete && onAbort) replace.call(this, location, onComplete, onAbort)

    return replace.call(this, location, onComplete, () => {})
} */

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            name: 'search',
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
