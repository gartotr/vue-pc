import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '../store'

/* import Search from '../views/Search'
import Home from '../views/Home'
import Login from '../views/Login'
import Register from '../views/Register'
import Detail from '../views/Detail'
import AddCartSuccess from '../views/AddCartSuccess'
import ShopCart from '../views/ShopCart'
import Pay from '../views/Pay'
import PaySuccess from '../views/PaySuccess'
import Trade from '../views/Trade'
import Center from '../views/Center' */

const Search = () => import(/* webpackChunkName: "Search" */ '../views/Search')
const Home = () => import(/* webpackChunkName: "Home" */ '../views/Home')
const Login = () => import(/* webpackChunkName: "Login" */ '../views/Login')
const Register = () => import(/* webpackChunkName: "Register" */ '../views/Register')
const Detail = () => import(/* webpackChunkName: "Detail" */ '../views/Detail')
const AddCartSuccess = () =>
    import(/* webpackChunkName: "AddCartSuccess" */ '../views/AddCartSuccess')
const ShopCart = () => import(/* webpackChunkName: "ShopCart" */ '../views/ShopCart')
const Pay = () => import(/* webpackChunkName: "Pay" */ '../views/Pay')
const PaySuccess = () => import(/* webpackChunkName: "PaySuccess" */ '../views/PaySuccess')
const Trade = () => import(/* webpackChunkName: "Trade" */ '../views/Trade')
const Center = () => import(/* webpackChunkName: "Center" */ '../views/Center')

// 重写push和replace方法
// 目的：为了让编程式导航重复点击时不报错~
/* const push = VueRouter.prototype.push
const replace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location, onComplete, onAbort) {
    // 如果用户想处理失败，就处理
    if (onComplete && onAbort) {
        return push.call(this, location, onComplete, onAbort)
    }
    // 如果用户不处理失败，给默认值：空函数
    return push.call(this, location, onComplete, () => {})
}

VueRouter.prototype.replace = function(location, onComplete, onAbort) {
    // 如果用户想处理失败，就处理
    if (onComplete && onAbort) {
        return replace.call(this, location, onComplete, onAbort)
    }
    // 如果用户不处理失败，给默认值：空函数
    return replace.call(this, location, onComplete, () => {})
} */

Vue.use(VueRouter)

const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: Home,
        },
        {
            name: 'search',
            path: '/search/:searchText?',
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
        {
            name: 'detail',
            path: '/detail/:id',
            component: Detail,
        },

        {
            // 命名路由
            name: 'addcartsuccess',
            path: '/addcartsuccess',
            component: AddCartSuccess,
            beforeEnter: (to, from, next) => {
                if (from.name === 'detail') {
                    return next()
                }
                next('./shopcart')
            },
        },
        {
            // 命名路由
            name: 'shopcart',
            path: '/shopcart',
            component: ShopCart,
        },
        {
            // 命名路由
            name: 'trade',
            path: '/trade',
            component: Trade,
        },
        {
            // 命名路由
            name: 'pay',
            path: '/pay',
            component: Pay,
        },

        {
            // 命名路由
            name: 'paysuccess',
            path: '/paysuccess',
            component: PaySuccess,
        },

        {
            // 命名路由
            name: 'center',
            path: '/center/myorder',
            component: Center,
        },
    ],
    scrollBehavior() {
        return { x: 0, y: 0 }
    },
})

const permissionPaths = ['/trade', '/pay', 'center', 'paysuccess']

router.beforeEach((to, from, next) => {
    if (permissionPaths.indexOf(to.path) > -1 && !store.state.user.token) {
        return next('/login')
    }
    next()
})

export default router
