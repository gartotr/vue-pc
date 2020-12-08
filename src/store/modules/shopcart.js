import { reqGetCartList, reqUpdateCartCheck, reqUpdateCartCount, reqDelCart } from '@api/shopcart'
//获取三级分类的list
export default {
    state: {
        cartList: [],
    },
    getters: {},
    actions: {
        //购物车列表

        async getCartList({ commit }) {
            const cartList = await reqGetCartList()
            commit('GET_CART_LIST', cartList)
        },
        async updateCartCount({ commit }, { skuId, skuNum }) {
            await reqUpdateCartCount(skuId, skuNum)
            commit('UPDATE_CART_COUNT', { skuId, skuNum })
        },
        async updateCartCheck({ commit }, { skuId, isChecked }) {
            await reqUpdateCartCheck(skuId, isChecked)
            console.log(commit)
        },
        async delCart({ commit }, skuId) {
            const delTarget = await reqDelCart(skuId)
            commit('DEL_CART', delTarget)
        },
    },
    mutations: {
        GET_CART_LIST(state, cartList) {
            state.cartList = cartList
        },
        UPDATE_CART_COUNT(state, { skuId, skuNum }) {
            state.cartList = state.cartList.map(cart => {
                if (cart.skuId === skuId) {
                    cart.skuNum += skuNum
                }
                return cart
            })
        },
        DEL_CART(state, delTarget) {
            state.cartList = state.cartList.filter(item => item.skuId !== delTarget)
        },
    },
}
