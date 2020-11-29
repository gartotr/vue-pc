import axios from 'axios'

import { Message } from 'element-ui'

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

const instance = axios.create({
    baseURL: '/api',
})

//请求拦截器
instance.interceptors.request.use(config => {
    NProgress.start()
    return config
})

//响应拦截器

instance.interceptors.response.use(
    response => {
        NProgress.done()
        if (response.data.code === 200) {
            // 返回成功的响应数据'

            return response.data.data
        }

        // 功能失败 --> 返回失败的Promise
        return Promise.reject(response.data.message)
    },
    error => {
        // console.dir(error);
        NProgress.done()
        Message.error(message)
        const message = error.message || '网络错误'

        return Promise.reject(message)
    },
)

export default instance
