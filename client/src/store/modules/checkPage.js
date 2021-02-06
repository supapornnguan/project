const checkPage = {
    state : {
        formCart : false
    },
    getters : {
        getStateIscart(state){
            return state.formCart
        }
    },
    mutations : {
        SET_CHECK_STATE (state, data) {
            state.formCart = data
        }
    }
}
export default checkPage