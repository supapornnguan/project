const seller = {
    state : {
        sellers : {
            loggedInSeller : false,
            data : "",
        },
        orderDetail : {
            keysOrder : "",
            // product_detail_pickup : "",
            // product_image_pickup : "",
            // product_name_pickup : "",
            // product_unit_price_pickup : "",
            // quantity_pickup : "",
            // sellerUid_pickup : "",
            // seller_name_shop_pickup : "",
            // status_pickup : "",
            type : ""
        },
        keydetail : {
             keysProductEdit : "",
             edit : 0
        }
       
    },
    getters : {
        sellers(state){
            return state.sellers
        },
        keyProductDetail(state){
            return state.orderDetail
        },
        getKeyProductEdit(state){
            return state.keydetail
        }
    },
    mutations : {
        SET_LOGGED_IN(state, value) { 
            state.sellers.loggedInSeller = value;
        },
        SET_USER(state, data){
            state.sellers.data = data
        },
        SET_KEY_ORDER_DETAIL(state,payload){
            state.orderDetail.keysOrder = payload.keysOrder
            state.orderDetail.type = payload.type
        },
        SET_PRODUCT_ID_EDIT (state,data){
            state.keydetail.keysProductEdit=data.keysProductEdit
        },
    },
    actions : {
        fetchSeller({ commit }, sellers) {
            commit("SET_LOGGED_IN", sellers !==null);
            if(sellers){
                commit("SET_USER",{
                    seller_email : sellers.seller_email,
                    seller_firstname : sellers.seller_firstname
                });
            }else {
                commit("SET_USER", null)
            }
        },
    }
}

export default seller