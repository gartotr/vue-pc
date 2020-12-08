import request from '@utils/request'

export const reqExit = () => {
    return request({
        method: 'GET',
        url: '/user/passport/logout',
    })
}
