<template>
    <div class="loginUser">
        <h1 id="login">LOG IN</h1>
        <sui-form>
            <sui-form-field>
                <label id="labelLogin">EMAIL</label>
                <input placeholder="EMAIL" v-model="seller_email"/>
            </sui-form-field>
            <sui-form-field>
                <label id="labelLogin">PASSWORD</label>
                <input type="password" placeholder="PASSWORD" v-model="seller_password"/>
            </sui-form-field>
         
           
        </sui-form>
         <sui-button  @click="loginSellerSuccess" style="margin-left:150px; margin-top:20px">Login</sui-button>
    </div>
</template>

<script>
import {auth} from  "../firebase";
// import VueRouter from 'vue-router'
// import router from "../router"
// const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
    data() {
        return {
            seller_email :'test100@seller.com',
            seller_password :'testtest123'
        }
    },
    methods: { 
       async loginSellerSuccess(){
           await auth.signInWithEmailAndPassword(this.seller_email,this.seller_password)
                .then(user =>{
                    console.log(user)
                    this.$router.push({name: "sellerCenter" , params : {sellerid : auth.currentUser.uid}})
                    })
                .catch(error => {
                    alert(error)
                    console.log(error)
                })



        }

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