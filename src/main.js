import Vue from 'vue'
import App from './App.vue'

import router from './router'
import ElementUI from 'element-ui'
import store from './store'

import './styles/reset.css'
import 'element-ui/lib/theme-chalk/index.css'
import './styles/style.less'

//测试用的mock 启动mock服务器
import './mock/mockServer'

Vue.config.productionTip = false
Vue.use(ElementUI)

new Vue({
    beforeCreate() {
        Vue.prototype.$bus = this
    },

    render: h => h(App),
    router,
    store,
}).$mount('#app')
