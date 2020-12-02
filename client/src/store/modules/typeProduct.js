const typeProduct = {
    state : {
        productType : ""
    },
    getters : {
        getProductType(state){
            return state.productType
        }
    },
    mutations : {
        SET_PRODUCT_TYPE(state, payload){
            state.productType = payload.productType
        }
    },
}
export default typeProduct