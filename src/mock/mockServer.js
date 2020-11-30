import Mock from 'mockjs'
import banners from './banners.json'

//运行就会拦截get 地址为第一个参数  并将参数作为响应结果响应回去
Mock.mock('/mock/banners', 'get', {
    code: 200,
    'data|4': banners,
})
