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
         
            <sui-button  @click="login">Login</sui-button>
        </sui-form>
          <b-button variant="primary">
    Notifications <b-badge variant="light">4</b-badge>
  </b-button>

  
</div>
</template>

<script>
import firebase from "../firebase"
export default {
    data() {
        return {
            customer_emial :'',
            customer_password :''
        }
    },
    methods: {
        login(){
            firebase
            .auth()
            .signInWithEmailAndPassword(this.customer_emial,this.customer_password)
            .then(
                user => {
                    console.log(user);
                    this.$router.replace('home');
                }
            )
            .catch(
                error => {
                    alert(error)
                    console.log(error)
                }
            )

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
}
#labelLogin{
    text-align: left;
}

</style>