<template>
    <div class="loginUser">
        <h1 id="login">LOG IN</h1>
        <sui-form>
            <sui-form-field>
                <label id="labelLogin">EMAIL</label>
                <input placeholder="EMAIL" v-model="customer_email"/>
            </sui-form-field>
            <sui-form-field>
                <label id="labelLogin">PASSWORD</label>
                <input type="password" placeholder="PASSWORD" v-model="customer_password"/>
            </sui-form-field>
        </sui-form>
        
    <sui-button  @click="loginSuccess" style="margin-left:150px; margin-top:30px">Login</sui-button>

    <b-modal ref="my-modal" hide-footer title="ACCOUNT NOT FOUND">
        <div class="d-block text-center">
            <p>We can't find an account assosiated with this system.</p>
          
            <p>Would you like to create a new account?</p>
            <br>
            <b-button variant="primary" style="margin-right:30px">Yes</b-button>
            <b-button variant="primary">No</b-button>
        </div>
    </b-modal>


</div>
</template>

<script>
import {auth} from  "../firebase";
import VueRouter from 'vue-router'
import {mapGetters} from "vuex"
import store from "../store"
import firebase from "../firebase"
// import router from "../router"
const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
    data() {
        return {
            customer_email :'supapronnguan@gmail.com',
            customer_password :'numwan12',
            key_customer : {},
            key_customer_list : [],
        }
    },
    methods: { 
       async loginSuccess(){
           await auth.signInWithEmailAndPassword(this.customer_email,this.customer_password)
                .then( () =>{
                    console.log("login")
                    
                    
                    firebase.ref("user/").orderByChild("customer_email").equalTo(this.customer_email).on("value", snapshot => {
                        this.key_customer = snapshot.val()
                        this.key_customer_list = Object.keys(snapshot.val())
                        if(this.key_customer == null){
                            this.$refs['my-modal'].show()
                        }else{
                            store.commit("SET_LOGGED_IN" , true)
                            console.log(this.user1)
                            this.$router.replace({ name: "home" }).catch(failure => {
                            if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                                // show a small notification to the user
                                console.log('Login in order to access the admin panel')
                                }
                            })
                        }
                    })
                })
        }
    },
    computed : {
       ...mapGetters({
      user1 : "getUserloggedIn"
    }),
    }
}
</script>

<style>
.loginUser{
  width: 400px;
  margin: 0 auto;
  margin-top: 100px;
}
#login{
    margin-bottom: 50px;
    text-align: center;
}
#labelLogin{
    text-align: left;
}

</style>