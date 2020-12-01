import { reqGetBaseCategoryList, reqGetBanners, reqGetQuickNews, reqGetSeckillImg } from '@api/home'
//获取三级分类的list
export default {
    state: {
        categoryList: [],
        banners: [],
        quickNews: [],
        seckillImg: [],
    },
    getters: {},
    actions: {
        //获取三级分类的list
        async getCategoryList({ commit }) {
            const categoryList = await reqGetBaseCategoryList()
            commit('GET_CATEGORY_LIST', categoryList)
        },
        //轮播图图片
        async getBanners({ commit }) {
            const banners = await reqGetBanners()
            commit('GET_BANNERS', banners)
        },
        //快报
        async getQuickNews({ commit }) {
            const quickNews = await reqGetQuickNews()
            commit('GET_QUICK_NEWS', quickNews)
        },
        async getSeckillImg({ commit }) {
            const seckillImg = await reqGetSeckillImg()
            commit('GET_SECKIL_IMG', seckillImg)
        },
    },
    mutations: {
        GET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        },
        GET_BANNERS(state, banners) {
            state.banners = banners
        },
        GET_QUICK_NEWS(state, quickNews) {
            state.quickNews = quickNews
        },
        GET_SECKIL_IMG(state, seckillImg) {
            state.seckillImg = seckillImg
        },
    },
}
