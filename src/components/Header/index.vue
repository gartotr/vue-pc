<template>
    <header id="header">
        <div class="header_outer">
            <!-- 顶部 -->
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
                        <p v-if="$store.state.user.name">
                            {{ $store.state.user.name }}
                            <a @click="loginOut">退出</a>
                        </p>
                        <router-link to="/login" id="user_login" v-else>你好,请登录</router-link>
                        <router-link to="/register">免费注册</router-link>
                        <span>|</span>
                        <router-link to="/shopcart">我的购物车</router-link>
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
            <!-- 搜索LOGO -->
            <div class="header_main_outer" v-if="isChangeRouter">
                <div class="header_main w">
                    <h1 class="header_logo">
                        <router-link to="/">
                            <img src="./images/sprite.png" alt="" />
                        </router-link>
                    </h1>
                    <div class="header_search">
                        <input type="text" v-model="searchText" @keydown.enter="search" />
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
            <!-- 登录路由 -->
            <div class="header_main_login" v-else>
                <div class="header_main_login_outer">
                    <div class="header_main_login_left">
                        <div class="header_main_login_img">
                            <router-link to="/">
                                <img src="./images/logo-201305-b.png" alt="" />
                            </router-link>
                        </div>
                        <b>欢迎登录</b>
                    </div>
                    <div class="header_main_login_right">
                        <span>登录页面，问卷调查</span>
                    </div>
                </div>
            </div>
            <!-- nav们 -->
            <div class="header_nav" v-show="isChangeRouter">
                <div
                    class="header_nav_left"
                    @mouseenter="isHeaderShow = false"
                    @mouseleave="isHeaderShow = true"
                >
                    全部商品分类
                    <List v-show="!isHeaderShow && this.$route.path !== '/'"></List>
                </div>
                <ul>
                    <li>
                        <a href="javascript:;">秒杀</a>
                    </li>
                    <li>
                        <a href="javascript:;">优惠券</a>
                    </li>
                    <li>
                        <a href="javascript:;">PLUS会员</a>
                    </li>
                    <li>
                        <a href="javascript:;">闪购</a>
                    </li>
                    <li>
                        <a href="javascript:;">拍卖</a>
                    </li>
                    <li>
                        <a href="javascript:;">东京家电</a>
                    </li>
                    <li>
                        <a href="javascript:;">东京超市</a>
                    </li>
                    <li>
                        <a href="javascript:;">东京生鲜</a>
                    </li>
                    <li>
                        <a href="javascript:;">东京金融</a>
                    </li>
                    <li>
                        <a href="javascript:;">东京国际</a>
                    </li>
                </ul>
            </div>
        </div>
    </header>
</template>

<script>
import List from '@comps/List'

export default {
    name: 'Header',
    data() {
        return {
            isHeaderShow: this.$route.path === '/',
            searchText: '',
            isShow: false,
            isChangeRouter: false,
        }
    },

    methods: {
        search() {
            const { searchText } = this

            const location = {
                name: 'search', // 使用命名路由
            }
            if (searchText) {
                location.params = {
                    searchText,
                }
            }

            const { categoryName } = this.$route.query

            if (categoryName) {
                location.query = this.$route.query
            }
            if (this.$route.name === 'search') {
                this.$router
                    .replace(location)
                    .then(() => {})
                    .catch(() => {})
            } else {
                this.$router
                    .push(location)
                    .then(() => {})
                    .catch(() => {})
            }
        },
        loginOut() {
            console.log('退出')
        },
    },
    watch: {
        $route: {
            immediate: true,
            handler: function ({ path }) {
                const search = /^\/search/.test(path)
                const detail = /^\/detail/.test(path)
                const addcartsuccess = /^\/addcartsuccess/.test(path)
                const shopcart = /^\/shopcart/.test(path)

                if (path === '/' || search || detail || addcartsuccess || shopcart) {
                    this.isChangeRouter = true
                } else {
                    this.isChangeRouter = false
                }
            },
            // 深度观察监听
            deep: true,
        },
    },
    mounted() {
        if (
            this.$route.path.includes('/search') ||
            this.$route.path.includes('/detail') ||
            this.$route.path.includes('/shopcart') ||
            this.$route.path.includes('/addcartsuccess')
        ) {
            this.isHeaderShow = true
        }
        this.$bus.$on('clearKeyword', () => {
            this.searchText = ''
        })
        if (this.$route.path === '/') {
            this.$bus.$emit('clearKeyword')
        }
    },
    components: {
        List,
    },
}
</script>

<style lang="less" scoped>
@orange: #f10215;

#user_login {
    margin-right: 8px;
}
.header_outer {
    position: relative;
}
.header_shortcut {
    width: 100%;
    background-color: #e3e4e5;
}
.w {
    width: 1180px;
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
        p {
            a {
                margin: 0 10px;
            }
        }
    }
}
.header_main_outer {
    width: 100%;
    background-color: #fff;
}
.header_main {
    height: 140px;
    width: 1180px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .header_logo {
        height: 100px;
        img {
            height: 100px;
        }
    }
    .header_search {
        margin-top: 40px;
        width: 504px;
        input {
            box-sizing: border-box;
            height: 34px;
            width: 438px;
            outline: none;
            border: 2px solid #e1251b;
            padding: 5px;
        }
        #search {
            color: #fff;
            height: 34px;
            width: 64px;
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
.header_nav {
    width: 800px;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 50%;
    margin-left: -400px;
    .header_nav_left {
        width: 190px;
        height: 40px;
        background-color: #e1251b;
        position: absolute;
        left: 0;
        top: 0;
        margin-left: -195px;
        color: #fff;
        font-size: 15px;
        font-weight: bold;
        line-height: 40px;
        text-align: center;
    }
    ul {
        display: flex;
        font-size: 15px;
        font-weight: 600;

        li {
            padding: 11px;

            a {
                color: #333;
            }
        }
        li:nth-of-type(1) a {
            color: #e1251b;
        }
        li:nth-of-type(2) a {
            color: #e1251b;
        }
    }
}
.icon-ditu {
    color: #f10215;
}
.header_main_login {
    width: 100%;
    height: 140px;
    background-color: #fff;
    .header_main_login_outer {
        display: flex;
        width: 1180px;
        margin: 0 auto;
        height: 140px;

        justify-content: space-between;
        .header_main_login_left {
            box-sizing: border-box;
            padding-top: 30px;
            display: flex;
            height: 140px;
            b {
                padding-left: 30px;
                font-size: 24px;
                line-height: 60px;
            }
        }
        .header_main_login_right {
            line-height: 140px;
            color: #999;
        }
    }
}
</style>