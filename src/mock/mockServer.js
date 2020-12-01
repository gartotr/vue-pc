import Mock from 'mockjs'
import banners from './banners.json'
import quickNews from './quickNews.json'
import seckillImg from './seckill.json'

//运行就会拦截get 地址为第一个参数  并将参数作为响应结果响应回去
Mock.mock('/mock/banners', 'get', {
    code: 200,
    'data|4': banners,
})

Mock.mock('/mock/quickNews', 'get', {
    code: 200,
    'data|4': quickNews,
})
/* 秒杀 */
Mock.mock('/mock/seckillImg', 'get', {
    code: 200,
    'data|5': seckillImg,
})
