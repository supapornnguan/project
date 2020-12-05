const orderPickup = {
    state : {
        infoSeller :[ {
            branch_selected : "",
            date_time_to_order : "",
            product_key : "",
            sellerUid : "",
            status : "",
            total_amount : "",
            userid : "",
            quantity : ""
        }]
    },
    getters : {
        getOrderByPickup(state){
            return state.infoSeller
        }
    },
    mutations : {
        SET_ORDER_BY_PICKUP(state, value){
            for(var i =0 ; i<value.length ; i++)
            {
                state.infoSeller[i].branch_selected = value[i].branch_selected
                state.infoSeller[i].date_time_to_order = value[i].date_time_to_order
                state.infoSeller[i].product_key = value[i].product_key
                state.infoSeller[i].sellerUid = value[i].sellerUid
                state.infoSeller[i].status = value[i].branch_selectstatused
                state.infoSeller[i].total_amount = value[i].branch_selectotal_amountted
                state.infoSeller[i].userid = value[i].userid
                state.infoSeller[i].quantity = value[i].quantity
            }
            
        }
    }
}
export default orderPickup