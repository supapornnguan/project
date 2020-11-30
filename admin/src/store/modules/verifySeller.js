const verifySeller = {
    state : {
        key : ""

    },
    getters : {
        getInfoSeller(state){
            return state.key
        }
    },
    mutations : {
        SET_INFO_SELLER(state,key){
            state.key = key
        }
    },
}
export default verifySeller