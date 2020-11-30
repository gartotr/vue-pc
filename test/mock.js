var Mock = require('mockjs')

Mock.Random.ctitle()

var data = Mock.mock({
    'car|4': [
        // "@image(大小, 背景色, 字体色, 图片格式, 图片内容)" 随机图片
        "@image('200x100', '@color', '#FFF', 'png', '@cname')",
    ],
})

console.log(data)
