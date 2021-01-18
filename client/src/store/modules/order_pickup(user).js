const orderPickupUser = {
    state : {
        key_pickup : ""
        // infoProduct : {
        //     key_pickup : "",
        //     quantity : "",
        //     total_amount : "",
        //     receiving_type_pick : "",
        //     status_pickup : "",
        //     branch_selected : "",
        //     date_time_to_order : "",
        //     sellerUid: ""
        // }
    },
    getters : {
        getKeyPickup (state) {
            return state.key_pickup
        }
        // getOrderPickupUser(state){
        //     return state.infoProduct
        // }
    },
    mutations : {
        SET_KEY_PRODUCT (state, payload){
            state.key_pickup = payload
        }
        // SET_ORDER_PICKUP_USER(state, payload){
        //     state.infoProduct.key_pickup = payload.key_pickup
        //     state.infoProduct.quantity = payload.quantity
        //     state.infoProduct.total_amount = payload.total_amount
        //     state.infoProduct.receiving_type_pick = payload.receiving_type_pick
        //     state.infoProduct.status_pickup = payload.status_pickup
        //     state.infoProduct.branch_selected = payload.branch_selected
        //     state.infoProduct.date_time_to_order = payload.date_time_to_order
        //     state.infoProduct.sellerUid = payload.sellerUid
        // }

    }
}
export default orderPickupUser