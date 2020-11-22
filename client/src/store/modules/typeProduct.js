const product = {
    state : {
        productType : null
    },
    getters : {

    },
    mutations : {
        SET_PRODUCT_TYPE(state, value){
            state.productType = value
        }
    },
    actions : {

        fetchProductType({ commit }, productType){
            

        }

    }
}
export default product