<template>
    <div class="fs_list" @click="goSearch">
        <div class="fs_list_menu">
            <div class="fs_list_list" v-for="list in categoryList" :key="list.categoryId">
                <a :data-categoryName="list.categoryName" :data-categoryId="list.categoryId" :data-categoryType="1">
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
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    name: 'List',
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

            if (this.$route.name === 'search') {
                this.$router.replace(location)
            } else {
                this.$router.push(location)
            }
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
.fs_list {
    box-sizing: border-box;
    width: 190px;
    height: 470px;
    background-color: #fff;
    padding-top: 10px;
    position: relative;
    z-index: 9999;
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
</style>
