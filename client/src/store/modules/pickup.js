const pickup ={
    state : {
        productKey : "",
        branch : "",
        summary : 
            {
                quantity : "",
                product_name : "",
                product_unit_price : "",
                product_image : "",
                sellerUid : "",
                product_detail : "",
                seller_name_shop : ""
            }
        ,
        type : {
            type1 : "",
            total_amount : ""
        },
        summaryCart : []   
    },
    getters : {
        getProductId(state) {
            return state.productKey
        },
        getSummaryPage(state){
            return state.summary
        },
        getReceivingType(state){
            return state.type
        },
        getBranch(state){
            return state.branch
        },
        getSummaryCart(state){
            return state.summaryCart
        },
        getSummaryCartValue(state){
            let res = 0;
            state.summaryCart.map(item => {
                res += item.product_unit_price * item.quantity
            });
            return res
        }
    },
    mutations : {
        SET_PRODUCT_ID (state,data){
            state.productKey=data
        },
        SET_SUMMARY_PAGE (state, payload) {
            state.summary.quantity = payload.quantity
            state.summary.product_name = payload.product_name
            state.summary.product_unit_price = payload.product_unit_price
            state.summary.product_image = payload.product_image
            state.summary.sellerUid = payload.sellerUid
            state.summary.product_detail = payload.product_detail
            state.summary.seller_name_shop = payload.seller_name_shop
        },
        SET_SUMMARY_PAGE_FROM_CART (state, payload) {
            state.summaryCart.push(payload)
        },
        SET_RECEIVING_TYPE (state, payload) {
            state.type.type1 = payload.type1
            state.type.total_amount = payload.total_amount
        },
        SET_BRANCH (state,payload){
            state.branch = payload.picked
        }
    }
}
export default pickup