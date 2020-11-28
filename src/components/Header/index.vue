<template>
    <header id="header">
        <div class="header_shortcut">
            <div class="shortcut w">
                <div
                    class="header_city"
                    @mouseenter="isShow = true"
                    @mouseleave="isShow = false"
                >
                    <i class="iconfont icon-ditu"></i>
                    <a href="javascript:;">广东</a>
                    <div class="all_city" v-show="isShow"></div>
                </div>
                <div class="header_item">
                    <router-link to="/login" id="user_login">
                        你好,请登录
                    </router-link>
                    <router-link to="/register">免费注册</router-link>
                    <span>|</span>
                    <router-link to="###">我的订单</router-link>
                    <span>|</span>
                    <router-link to="###">我的东京</router-link>
                    <span>|</span>
                    <router-link to="###">东京会员</router-link>
                    <span>|</span>
                    <router-link to="###">企业采购</router-link>
                    <span>|</span>
                    <router-link to="###">客户服务</router-link>
                    <span>|</span>
                    <router-link to="###">网站导航</router-link>
                    <span>|</span>
                    <router-link to="###">手机东京</router-link>
                </div>
            </div>
        </div>
        <div class="header_main_outer">
            <div class="header_main w">
                <h1 class="header_logo">
                    <router-link to="/">
                        <img src="./images/sprite.png" alt="" />
                    </router-link>
                </h1>
                <div class="header_search">
                    <input type="text" v-model="searchText" />
                    <button id="search" @click="search">搜索</button>
                </div>
                <div class="header_shopping">
                    <div class="header_cart">
                        <i class="iconfont icon-gouwuchekong"></i>
                        我的购物车
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            searchText: '',
            isShow: false,
        }
    },
    methods: {
        search() {
            const { searchText } = this
            const params = searchText ? `/${searchText}` : ''
            const localhost = '/search' + params
            this.$router.push(localhost)
        },
    },
}
</script>

<style lang="less">
@orange: #f10215;

#user_login {
    margin-right: 8px;
}
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

        span {
            color: #999;
            margin: 0 8px;
        }
        a:hover {
            transition: all 0.3s;
            color: @orange;
        }
    }
}
.header_main_outer {
    width: 100%;
    background-color: #fff;
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
        color: #f10215;
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

.icon-ditu {
    color: #f10215;
}
</style>