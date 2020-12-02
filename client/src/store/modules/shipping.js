const shipping = {
    state : {
        infoShipping : {
            orderdate : "",
            paymentType : "",
            customer_address : "",
            customer_district : "",
            customer_province : "",
            customer_zipcode : ""
        }
    },
    getters : {
        getInfoShipping(state) {
            return state.infoShipping
        }
    },
    mutations : {
        SET_INFO_SHIPPING (state, payload) {
            state.infoShipping.orderdate = payload.orderdate,
            state.infoShipping.paymentType = payload.paymentType,
            state.infoShipping.customer_address = payload.customer_address
            state.infoShipping.customer_district  = payload.customer_district
            state.infoShipping.customer_province = payload.customer_province
            state.infoShipping.customer_zipcode =  payload.customer_zipcode
        }
    }
}
export default shipping