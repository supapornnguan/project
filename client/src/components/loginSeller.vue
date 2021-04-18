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

        <b-modal ref="my-modal" hide-footer title="ACCOUNT NOT FOUND">
            <div class="d-block text-center">
            <p>We can't find an account assosiated with this system.</p>
          
            <p>Would you like to create a new account?</p>
            <br>
            <b-button variant="primary" style="margin-right:30px">Yes</b-button>
            <b-button variant="primary">No</b-button>
            </div>
        </b-modal>

        <b-modal ref="my-modal1" hide-footer title="WAITING FOR VERIFICATION">
            <div class="d-block text-center">
            <p>This account is not yet activated.</p>
            <br>
            <b-button variant="primary" @click="hideModal">Ok</b-button>

            </div>
        </b-modal>

    </div>
</template>

<script>
import {auth} from  "../firebase";
import firebase from "../firebase"
// import VueRouter from 'vue-router'
// import router from "../router"
// const { isNavigationFailure, NavigationFailureType } = VueRouter
export default {
    data() {
        return {
            seller_email :'',
            seller_password :'',
            key_seller : {},
            key_seller_list : [],
            check_verify : false
        }
    },
    methods: { 
       async loginSellerSuccess(){
           await auth.signInWithEmailAndPassword(this.seller_email,this.seller_password)
                .then(user =>{
                    console.log(user)
                    firebase.ref("seller/").orderByChild("seller_email").equalTo(this.seller_email).on("value", snapshot => {
                        console.log(snapshot.val())
                        this.key_seller = snapshot.val()
                        this.key_seller_list = Object.keys(snapshot.val())
                        for(var i = 0 ; i< this.key_seller_list.length ; i++){
                            var k = this.key_seller_list[i]
                            console.log(k)
                            this.check_verify = this.key_seller[k].verify_seller
                        }
                        console.log(this.check_verify)
                        if(snapshot.val() == null){   //check if not seller
                            this.$refs['my-modal'].show()
                        }else if(this.check_verify == false){
                            this.$refs['my-modal1'].show()
                        }else{
                            this.$router.push({name: "sellerCenter" , params : {sellerid : auth.currentUser.uid}})
                        }
                    })
                })
                .catch(error => {
                    alert(error)
                    console.log(error)
                })
        },
        hideModal(){
            this.$refs['my-modal1'].hide()
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