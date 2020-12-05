const user = {
    state : {
        users : {
            loggedIn : false,
            data : "",
            infoCustomer : {
                customer_email : "",
                customer_password : "",
                customer_firstname : "",
                customer_lastname : "",
                customer_phonenumber : "",
                customer_address : "",
                customer_district : "",
                customer_province : "",
                customer_zipcode : ""
            }
        }
    },
    getters : {
        users(state){
            return state.users
        },
        inforCustomer( state ){
            return state.infoCustomer
        }
    },
    mutations : {
        SET_LOGGED_IN(state, value) { 
            state.users.loggedIn = value;
        },
        SET_USER(state, data){
            state.users.data = data
        },
        SET_INFO_CUSTOMER( state , payload) {
            state.infoCustomer.customer_email = payload.customer_email
            state.infoCustomer.customer_password = payload.customer_password
            state.infoCustomer.customer_firstname = payload.customer_firstname
            state.infoCustomer.customer_lastname = payload.customer_lastname
            state.infoCustomer.customer_phonenumber = payload.customer_phonenumber
            state.infoCustomer.customer_address = payload.customer_address
            state.infoCustomer.customer_district = payload.customer_district
            state.infoCustomer.customer_province = payload.customer_province
            state.infoCustomer.customer_zipcode = payload.customer_zipcode
        }
    },
    actions : {
        fetchUser({ commit }, users) {
            commit("SET_LOGGED_IN", users !==null);
            if(users){
                commit("SET_USER",{
                    customer_email : users.customer_email,
                    customer_firstname : users.customer_firstname
                });
            }else {
                commit("SET_USER", null)
            }
        },
    }
}

export default user