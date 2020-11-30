import { reqGetBaseCategoryList } from '@api/home'
//获取三级分类的list
export default {
    state: {
        categoryList: [],
    },
    getters: {},
    actions: {
        //获取三级分类的list
        async getCategoryList({ commit }) {
            const categoryList = await reqGetBaseCategoryList()
            commit('GET_CATEGORY_LIST', categoryList)
        },
    },
    mutations: {
        GET_CATEGORY_LIST(state, categoryList) {
            state.categoryList = categoryList
        },
    },
}
