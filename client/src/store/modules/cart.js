const cart = { 
    state : {
        keyCart : "",
        infoCart : {
            product_image : "",
            product_name : "",
            product_unit_price : ""
        }
    },
    getters : {
        getInfocart(state){
            return state.infoCart

        }
    },
    mutations : {
        SET_INFO_CART (state, payload) {
            state.infoCart.product_image = payload.product_image
            state.infoCart.product_name = payload.product_name
            state.infoCart.product_unit_price = payload.product_unit_price
        }
    }
}
export default cart