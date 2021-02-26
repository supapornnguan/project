const storePickup = {
    state : {
        store_name_check : "",
        keyTrack : "",
        keyOrder : "",
        check_atstore : ""

    },
    getters : {
        getNameStore (state) {
            return state.store_name_check
        },
        getKeyTracking (state) {
            return state.keyTrack
        },
        getKeyOrder (state) {
            return state.keyOrder
        },
        getAtstore (state) {
            return state.check_atstore
        }
       
    },
    mutations : {
        SET_NAME_STORE (state, data) {
            state.store_name_check = data.idStore
        },
        SET_KEY_TRACK (state,data) {
            state.keyTrack = data
        },
        SET_KEY_ORDER (state, data) {
            state.keyOrder = data
        },
        CHECK_ATSTORE (state , data) {
            state.check_atstore = data
        }
    },
}
export default storePickup