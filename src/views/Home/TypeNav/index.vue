<template>
    <div class="fs">
        <div class="fs_outer">
            <!-- 能hover的列表 -->
            <div class="fs_list" @click="goSearch">
                <div class="fs_list_menu">
                    <div class="fs_list_list" v-for="list in categoryList" :key="list.categoryId">
                        <a
                            :data-categoryName="list.categoryName"
                            :data-categoryId="list.categoryId"
                            :data-categoryType="1"
                        >
                            {{ list.categoryName }}
                        </a>
                        <div class="fs_list_item">
                            <dl class="fs_fore" v-for="child in list.categoryChild" :key="child.categoryId">
                                <dt>
                                    <a
                                        :data-categoryName="child.categoryName"
                                        :data-categoryId="child.categoryId"
                                        :data-categoryType="2"
                                    >
                                        {{ child.categoryName }}
                                    </a>
                                </dt>
                                <dd>
                                    <em v-for="children in child.categoryChild" :key="children.categoryId">
                                        <a
                                            :data-categoryName="children.categoryName"
                                            :data-categoryId="children.categoryId"
                                            :data-categoryType="3"
                                        >
                                            {{ children.categoryName }}
                                        </a>
                                    </em>
                                </dd>
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 轮播图 -->
            <div class="fs_wrapper">
                <ul class="fs_wrapper_inner">
                    <li>
                        <a href="javascript:;"><img src="./images/banner1.jpg" alt="" /></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="./images/banner2.jpg" alt="" /></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="./images/banner3.jpg" alt="" /></a>
                    </li>
                    <li>
                        <a href="javascript:;"><img src="./images/banner4.jpg" alt="" /></a>
                    </li>
                </ul>
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
                        <li>
                            <a href="javascript:;">但为什么AirPods上市两年后</a>
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
import { mapState, mapActions } from 'vuex'

export default {
    name: 'TypeNav',
    computed: {
        ...mapState({
            categoryList: (state) => state.home.categoryList,
        }),
    },
    methods: {
        ...mapActions(['getCategoryList']),
        goSearch(e) {
            const { categoryname, categoryid, categorytype } = e.target.dataset

            if (!categoryname) return
            const location = {
                name: 'search',
                query: {
                    categoryName: categoryname,
                    [`category${categorytype}Id`]: categoryid,
                },
            }
            const { searchText } = this.$route.params

            if (searchText) {
                location.params = {
                    searchText,
                }
            }

            this.$router.push(location)
        },
    },
    mounted() {
        if (this.categoryList.length) return
        this.getCategoryList()
    },
}
</script>

<style lang="less" scoped>
a {
    cursor: pointer;
}
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
    .fs_list {
        box-sizing: border-box;
        width: 190px;
        height: 470px;
        background-color: #fff;
        padding-top: 10px;
        position: relative;
        a {
            color: #636363;
        }
        .fs_list_list {
            transition: all 0.2s;
            font-size: 14px;
            height: 27px;
            line-height: 27px;
            padding-left: 16px;
            .fs_list_item {
                box-sizing: border-box;
                width: 600px;
                height: 470px;
                background-color: #fff;
                position: absolute;
                left: 190px;
                top: 0;
                padding: 16px;
                box-shadow: 2px -2px 4px rgb(184, 184, 184);
                display: none;
                z-index: 999;
                .fs_fore {
                    display: flex;
                    dt {
                        line-height: 16px;
                        margin: 5px 10px 5px 5px;
                        font-weight: bold;
                        font-size: 12px;
                        box-sizing: border-box;
                        a {
                            color: #333333;
                        }
                        &:after {
                            content: ' > ';
                        }
                    }
                    dd {
                        line-height: 18px;
                        margin: 5px 10px 5px 5px;
                        em {
                            margin: 0 2px;
                            font-size: 12px;
                            &:after {
                                content: ' / ';
                                color: #999;
                            }
                            a:hover {
                                transition: all 0.5s;
                                color: #e01414;
                            }
                        }
                    }
                }
            }
            &:hover .fs_list_item {
                display: block;
            }
            &:hover {
                background-color: #d9d9d9;
            }
        }
    }
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
        padding: 0 10px;
        background-color: #ffffff;
        .fs_col_news {
            width: 170px;
            height: 130px;
            // background-color: #999;
            box-sizing: border-box;
            padding: 0px 5px;
            border-top: 1px solid #999;
            border-bottom: 1px solid #999;
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

.fs_wrapper_inner {
    background-color: #e01414;
    position: relative;
    li {
        position: absolute;
        display: flex;
        font-size: 0;
        img {
            width: 590px;
            height: 470px;
        }
    }
}
</style>
