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
export default {
    data() {
        return {
            customer_emial :'',
            customer_password :''
        }
    },
    methods: { 
       async loginSuccess(){
           await auth.signInWithEmailAndPassword(this.customer_emial,this.customer_password)
                .then( user =>{
                        console.log(user)
                        this.$router.replace({ name: "home" });
                    })
                .catch( err => {
                    console.log(err);
                });


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