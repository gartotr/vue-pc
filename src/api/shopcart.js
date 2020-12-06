import request from '@utils/request'
//购物车数据
export const reqGetCartList = () => {
    return request({
        method: 'GET',
        url: `/cart/cartList`,
    })
}
//添加减少商品
export const reqUpdateCartCount = (skuId, skuNum) => {
    return request({
        method: 'POST',
        url: `/cart/addToCart/${skuId}/${skuNum}`,
    })
}
//切换选中
export const reqUpdateCartCheck = (skuId, isChecked) => {
    return request({
        method: 'GET',
        url: `/cart/addToCart/${skuId}/${isChecked}`,
    })
}
//删除
export const reqDelCart = skuId => {
    return request({
        method: 'DELETE',
        url: `/cart/deleteCart/${skuId}`,
    })
}
