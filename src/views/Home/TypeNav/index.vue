<template>
    <div class="fs">
        <div class="fs_outer">
            <!-- 能hover的列表 -->
            <List></List>
            <!-- 轮播图 -->
            <div class="fs_wrapper">
                <!-- <el-carousel class="fs_wrapper_inner" height="470px" :interval="1500">
                    <el-carousel-item class="fs_wrapper_imggs" v-for="imgs in banners" :key="imgs.id">
                        <a href="javascript:;"><img :src="imgs.imgUrl" alt="" /></a>
                    </el-carousel-item>
                </el-carousel> -->
                <Carousel :carouselList="banners" />
            </div>
            <!-- 三张图 -->
            <div class="fs_slider">
                <ul>
                    <li>
                        <a href="javascript:;"><img src="./images/Snipaste_2020-11-29_17-54-38.jpg" alt="" /></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="./images/Snipaste_2020-11-29_17-55-21.jpg" alt="" /></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="./images/Snipaste_2020-11-29_17-55-28.jpg" alt="" /></a>
                    </li>
                </ul>
            </div>

            <div class="fs_col">
                <div class="fs_user_info">
                    <div class="fs_user_hi">
                        <div class="fs_user_img"></div>
                        <div class="fs_user_lr">
                            <p>Hi~ 欢迎逛东京!</p>
                            <p>
                                <router-link to="/login">登录</router-link>
                                |
                                <a href="#">注册</a>
                            </p>
                        </div>
                    </div>
                    <div class="fs_user_plus">
                        <div class="fs_user_newpeo">新人福利</div>
                        <div class="fs_user_newplus">PLUS会员</div>
                    </div>
                </div>
                <div class="fs_col_news">
                    <h4>东京快报</h4>
                    <ul>
                        <li v-for="news in quickNews" :key="news.id">
                            <a href="javascript:;">{{ news.quickNews }}</a>
                        </li>
                    </ul>
                </div>
                <div class="fs_col_icon">
                    <img src="./images/iccoonn.jpg" alt="" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import List from '@comps/List'
import { mapState, mapActions } from 'vuex'
import Swiper, { Navigation, Pagination } from 'swiper'
import 'swiper/swiper-bundle.min.css'

import Carousel from '@comps/Carousel'

Swiper.use([Navigation, Pagination])

export default {
    name: 'TypeNav',
    computed: {
        ...mapState({
            banners: (state) => state.home.banners,
            quickNews: (state) => state.home.quickNews,
        }),
    },
    methods: {
        ...mapActions(['getBanners', 'getQuickNews']),
    },
    async mounted() {
        await this.getBanners()
        this.getQuickNews()
    },
    components: {
        Carousel,
        List,
    },
}
</script>

<style lang="less" scoped>
.fs {
    margin-top: 10px;
    height: 470px;
    width: 100%;
}
.fs_outer {
    width: 1190px;
    height: 480px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .fs_wrapper {
        width: 590px;
        height: 470px;
        background-color: rgb(181, 184, 184);
    }
    .fs_slider {
        width: 190px;
        height: 470px;

        ul {
            width: 190px;
            height: 470px;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            li {
                width: 190px;
                height: 150px;
                &:hover {
                    opacity: 0.6;
                    transition: 0.5s;
                }
                img {
                    width: 190px;
                    height: 150px;
                }
            }
        }
    }
    .fs_col {
        width: 190px;
        height: 470px;
        box-sizing: border-box;
        // padding: 0 10px;
        background-color: #ffffff;
        .fs_col_news {
            width: 170px;
            height: 130px;
            // background-color: #999;
            box-sizing: border-box;
            padding: 0px 12px;
            // border-top: 1px solid #999;
            // border-bottom: 1px solid #999;
            h4 {
                padding: 10px 0;
                font-size: 14px;
            }
            li {
                height: 20px;
                line-height: 20px;
                a {
                    color: #666;
                }
            }
        }
        .fs_user_info {
            height: 100px;
            box-sizing: border-box;

            .fs_user_hi {
                box-sizing: border-box;
                padding: 10px 10px;
                height: 65px;

                display: flex;
                .fs_user_img {
                    height: 40px;
                    width: 40px;
                    border-radius: 50%;
                    background: url('./images/jdddddddd.jpg');
                    background-size: 100%;
                }
                .fs_user_lr {
                    padding-left: 10px;
                }
            }
            .fs_user_plus {
                height: 25px;
                box-sizing: border-box;
                display: flex;
                cursor: pointer;
                justify-content: space-evenly;

                div {
                    border-radius: 15px;
                    line-height: 25px;
                    text-align: center;
                    height: 25px;
                    width: 70px;
                }
                .fs_user_newpeo {
                    background-color: #e01414;
                    color: #fff;
                }
                .fs_user_newplus {
                    background-color: #363634;
                    color: #e5d790;
                }
            }
        }
        .fs_col_icon {
            width: 190px;
            height: 240px;
            img {
                width: 190px;
                height: 240px;
            }
        }
    }
}

/* 轮播 */
</style>
