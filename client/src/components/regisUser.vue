<template lang="html">
  <div class="regisUser">
    <h1 id="H1">SIGN IN</h1>
    <sui-form>
        <sui-form-field required >
          <label id="labelRegisUser">EMAIL</label>
          <input placeholder="EMAIL" type="text" v-model="Users.customer_emial" />
        </sui-form-field>
        <!-- check email if invalid email will show error -->
        <sui-message error visible v-if="Users.customer_emial==''">
          <p>the email address is badly formatted</p>
        </sui-message>
        <sui-form-field required>
          <label id="labelRegisUser">PASSWORD</label>
          <input placeholder="PASSWORD" type="password" v-model="Users.customer_password" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">REPEAT PASSWORD</label>
          <input placeholder="REPEAT PASSWORD" type="password" v-model="Users.repeatPassword" :rules="[comparePassword]"/>
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">FIRSTNAME</label>
          <input placeholder="FIRSTNAME" type="text" v-model="Users.customer_firstname" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">LASTNAME</label>
          <input placeholder="LASTNAME" type="text" v-model="Users.customer_lastname" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">PHONE</label>
          <input placeholder="PHONE" type="text" v-model="Users.customer_phonenumber" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">ADDRESS</label>
          <input placeholder="ADDRESS" type="text" v-model="address.customer_address" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">DISTRICT</label>
          <input placeholder="DISTRICT" type="text" v-model="address.customer_district" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">PROVINCE</label>
          <input placeholder="PROVINCE" type="text" v-model="address.customer_province" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">ZIP CODE</label>
          <input placeholder="ZIP CODE" type="text" v-model="address.customer_zipcode" />
        </sui-form-field>        
        <div class="ui submit button" @click="addUser">Submit</div>
  </sui-form>
  </div>
</template>
<script>
import firebase from "../firebase";
import {auth} from  "../firebase";
const db = firebase.ref("user");
export default {
  name: 'regisUser',
  data() {
    return {
      user:{},
      Users : [
        {
          customer_emial : "",
          customer_password : "",
          repeatPassword: "",
          customer_firstname : "",
          customer_lastname : "",
          customer_phonenumber : "",
        }
      ],
      address : [
        {
          customer_address : "",
          customer_district : "",
          customer_province : "",
          customer_zipcode : ""
        }
      ],
      checkmail : ''
    }
  },
  methods: {
     async addUser(){
        console.log(firebase)
        console.log("okokokokokok")
        let newUser = {
          customer_emial : this.Users.customer_emial,
          customer_password : this.Users.customer_password,
          customer_firstname : this.Users.customer_firstname,
          customer_lastname : this.Users.customer_lastname,
          customer_phonenumber : this.Users.customer_phonenumber
        }
        let newaddress = [{
          customer_address : this.address.customer_address,
          customer_district : this.address.customer_district,
          customer_province : this.address.customer_province,
          customer_zipcode : this.address.customer_zipcode
        }]
        db.push(newUser).child('address').set(newaddress)

//athenticate
     await auth.createUserWithEmailAndPassword(newUser.customer_emial, newUser.customer_password)
                .then(
                  user => {
                    this.$router.replace('/')
                    console.log(user)
                  }
                )
        //read data when add data to the database
        db.once('value')
          .then(function(snapshort){
            var email1 = snapshort.val(); 
            console.log(email1) //show all user with uniqe key
            var key = Object.keys(snapshort.val())  ;
            console.log(key)
          })
      },
       comparePassword(){
      return this.Users.password === this.Users.repeatPassword ? true : 'Passwords don\'t match'
    }

//check format of email
      // checkEmail(even){
      //   if(even.target.value.match('@gmail.com')){
      //     this.checkmail = true
      //   }
      //   else if(even.target.value.match('@hotmail.com')){
      //     this.checkmail = 'true'
      //   }
      //   else{
      //     this.checkmail = 'false'
      //   }
      //   console.log('maillllll' + this.checkmail)
      // }

  },
};
</script>

<style scoped>
#H1{
  margin-top: 50px;
  margin-bottom: 60px;
  text-align: center;
}
.boxForm{
  margin-top: 80px;
  margin-left: 500px;
  margin-right: 500px;
}
.textPosition{
  text-align: left;
}
#labelRegisUser{
  text-align: left;
  padding-bottom: 10px;
}
.regisUser{
  width: 400px;
  margin: 0 auto;
}
.ui.submit.button{
  margin-left: 150px;
}
</style>