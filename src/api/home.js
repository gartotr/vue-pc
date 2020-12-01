import request from '@utils/request'
import mockRequest from '@utils/mockRequest'

export const reqGetBaseCategoryList = () => {
    return request({
        method: 'GET',
        url: '/product/getBaseCategoryList',
    })
}
/* 轮播图的mock数据 */
export const reqGetBanners = () => {
    return mockRequest({
        method: 'GET',
        url: '/banners',
    })
}
/* 快报 */
export const reqGetQuickNews = () => {
    return mockRequest({
        method: 'GET',
        url: '/quickNews',
    })
}
