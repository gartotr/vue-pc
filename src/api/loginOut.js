import request from '@utils/request'

export const getLoginOut = () => {
    return request({
        method: 'GET',
        url: '/user/passport/logout',
    })
}
