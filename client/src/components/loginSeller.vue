<template>
    <div class="loginUser">
        <h1 id="login">LOG IN</h1>
        <sui-form>
            <sui-form-field>
                <label id="labelLogin">EMAIL</label>
                <input placeholder="EMAIL" v-model="seller_emial"/>
            </sui-form-field>
            <sui-form-field>
                <label id="labelLogin">PASSWORD</label>
                <input placeholder="PASSWORD" v-model="seller_password"/>
            </sui-form-field>
         
            <sui-button  @click="login" style="margin-left:150px">Login</sui-button>
        </sui-form>
    </div>
</template>

<script>
// import firebase from "../firebase"
export default {
    data() {
        return {
            seller_emial :'',
            seller_password :''
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