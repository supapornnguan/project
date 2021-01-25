const orderPickup = {
    state : {
        infoSeller : {
            branch_selected : "",
            date_time_to_order : "",
            product_key : "",
            sellerUid : "",
            status : "",
            total_amount : "",
            userid : "",
            quantity : ""
        }
    },
    getters : {
        getOrderByPickup(state){
            return state.infoSeller
        }
    },
    mutations : {
        SET_ORDER_BY_PICKUP(state, value){
            
                state.infoSeller.branch_selected = value.branch_selected
                state.infoSeller.date_time_to_order = value.date_time_to_order
                state.infoSeller.product_key = value.product_key
                state.infoSeller.sellerUid = value.sellerUid
                state.infoSeller.status = value.branch_selectstatused
                state.infoSeller.total_amount = value.branch_selectotal_amountted
                state.infoSeller.userid = value.userid
                state.infoSeller.quantity = value.quantity
            
            
        }
    }
}
export default orderPickup