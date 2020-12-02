const seller = {
    state : {
        sellers : {
            loggedInSeller : false,
            data : ""
        }
    },
    getters : {
        sellers(state){
            return state.sellers
        }
    },
    mutations : {
        SET_LOGGED_IN(state, value) { 
            state.sellers.loggedInSeller = value;
        },
        SET_USER(state, data){
            state.sellers.data = data
        }
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