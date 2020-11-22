const user = {
    state : {
        users : {
            loggedIn : false,
            data : ""
        }
    },
    getters : {
        users(state){
            return state.users
        }
    },
    mutations : {
        SET_LOGGED_IN(state, value) { 
            state.users.loggedIn = value;
        },
        SET_USER(state, data){
            state.users.data = data
        }
    },
    actions : {
        fetchUser({ commit }, users) {
            commit("SET_LOGGED_IN", users !==null);
            if(users){
                commit("SET_USER",{
                    displayName : users.displayName,
                    email : users.email
                });
            }else {
                commit("SET_USER", null)
            }
        },
    }
}

export default user