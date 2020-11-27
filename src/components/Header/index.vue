<template>
    <header id="header">
        <div class="header_shortcut">
            <div class="shortcut w">
                <div
                    class="header_city"
                    @mouseenter="isShow = true"
                    @mouseleave="isShow = false"
                >
                    <a href="javascript:;">广东</a>
                    <div class="all_city" v-show="isShow"></div>
                </div>
                <div class="header_item">
                    <p>你好,请登录</p>
                    <a href="#">免费注册</a>
                    <span>|</span>
                    <a href="#">我的订单</a>
                    <span>|</span>
                    <a href="#">我的京东</a>
                    <span>|</span>
                    <a href="#">京东会员</a>
                    <span>|</span>
                    <a href="#">企业采购</a>
                    <span>|</span>
                    <a href="#">客户服务</a>
                    <span>|</span>
                    <a href="#">网站导航</a>
                    <span>|</span>
                    <a href="#">手机京东</a>
                </div>
            </div>
        </div>
        <div class="header_main w">
            <h1 class="header_logo">
                <a href="#"><img src="./images/sprite.png" alt="" /></a>
            </h1>
            <div class="header_search">
                <input type="text" />
                <button id="search">搜索</button>
            </div>
            <div class="header_shopping">
                <div class="header_cart">我的购物车</div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            isShow: false,
        }
    },
}
</script>

<style lang="less">
@orange: #f10215;

.header_shortcut {
    width: 100%;
    background-color: #e3e4e5;
}
.w {
    width: 990px;
}
.shortcut {
    height: 30px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    margin: 0 auto;
    .header_item {
        display: flex;
        p {
            color: #999;
            margin-right: 10px;
        }
        span {
            color: #999;
            margin: 0 8px;
        }
        a:hover {
            color: @orange;
        }
    }
}
.header_main {
    height: 140px;
    width: 990px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .header_search {
        margin-top: 40px;
        width: 464px;
        input {
            box-sizing: border-box;
            height: 34px;
            width: 404px;
            outline: none;
            border: 2px solid #e1251b;
            padding: 5px;
        }
        #search {
            color: #fff;
            height: 34px;
            width: 60px;
            border: 2px solid #e1251b;
            border-left: none;
            outline: none;
            background-color: #e1251b;
        }
        #search:hover {
            transition: all 0.2s;
            background-color: #c81623;
        }
    }
    .header_shopping {
        width: 300px;
    }
    .header_cart {
        margin-top: 40px;
        width: 130px;
        height: 34px;
        border: 1px solid #eeeeee;
        text-align: center;
        line-height: 34px;
        &:hover {
            transition: all 0.4s;
            border: 1px solid #c81623;
        }
    }
}
.all_city {
    width: 200px;
    height: 200px;
    background-color: #ccc;
    position: relative;
}
</style>