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
</div>
</template>

<script>
import {auth} from  "../firebase";
import VueRouter from 'vue-router'
import {mapGetters} from "vuex"
import store from "../store"
// import router from "../router"
const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
    data() {
        return {
            customer_email :'hellotest9999@mail.com',
            customer_password :'helloqqq123'
        }
    },
    methods: { 
       async loginSuccess(){
           await auth.signInWithEmailAndPassword(this.customer_email,this.customer_password)
                .then( () =>{
                    console.log("login")
                    store.commit("SET_LOGGED_IN" , true)
                    console.log(this.user1)
                    this.$router.replace({ name: "home" }).catch(failure => {
                        if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                        // show a small notification to the user
                        console.log('Login in order to access the admin panel')
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