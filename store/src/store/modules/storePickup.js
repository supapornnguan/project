const storePickup = {
    state : {
        store_name_check : "",
        keyTrack : "",
        keyOrder : "",
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
        }
    },
    mutations : {
        SET_NAME_STORE (state, data) {
            state.store_name_check = data
        },
        SET_KEY_TRACK (state,data) {
            state.keyTrack = data
        },
        SET_KEY_ORDER (state, data) {
            state.keyOrder = data
        }
    },
}
export default storePickup