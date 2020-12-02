<template>
    <div class="loginUser">
        <h1 id="login">LOG IN</h1>
        <sui-form>
            <sui-form-field>
                <label id="labelLogin">EMAIL</label>
                <input placeholder="EMAIL" v-model="customer_emial"/>
            </sui-form-field>
            <sui-form-field>
                <label id="labelLogin">PASSWORD</label>
                <input placeholder="PASSWORD" v-model="customer_password"/>
            </sui-form-field>
        </sui-form>
    <sui-button  @click="loginSuccess" style="margin-left:150px; margin-top:30px">Login</sui-button>
</div>
</template>

<script>
import {auth} from  "../firebase";
import VueRouter from 'vue-router'
import router from "../router"
const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
    data() {
        return {
            customer_emial :'hahahelo@mail.com',
            customer_password :'hellohalo555'
        }
    },
    methods: { 
       async loginSuccess(){
           await auth.signInWithEmailAndPassword(this.customer_emial,this.customer_password)
                .then( () =>{
                    router.push('/').catch(failure => {
                        if (isNavigationFailure(failure, NavigationFailureType.redirected)) {
                        // show a small notification to the user
                        console.log('Login in order to access the admin panel')
                        }
                    })
                    })
        }
    },
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