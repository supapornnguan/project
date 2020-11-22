<template lang="html">
  <div class="regisUser">
    <h1 id="H1">SIGN IN</h1>
    <sui-form>
        <sui-form-field required >
          <label id="labelRegisUser">EMAIL</label>
          <input placeholder="EMAIL" type="text" v-model="Users.emailUser" />
        </sui-form-field>
        <!-- check email if invalid email will show error -->
        <sui-message error visible v-if="Users.emailUser==''">
          <p>the email address is badly formatted</p>
        </sui-message>
        <sui-form-field required>
          <label id="labelRegisUser">PASSWORD</label>
          <input placeholder="PASSWORD" type="password" v-model="Users.password" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">REPEAT PASSWORD</label>
          <input placeholder="REPEAT PASSWORD" type="password" v-model="Users.repeatPassword" :rules="[comparePassword]"/>
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">FIRSTNAME</label>
          <input placeholder="FIRSTNAME" type="text" v-model="Users.firstnameUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">LASTNAME</label>
          <input placeholder="LASTNAME" type="text" v-model="Users.lastnameUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">PHONE</label>
          <input placeholder="PHONE" type="text" v-model="Users.phoneUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">ADDRESS</label>
          <input placeholder="ADDRESS" type="text" v-model="address.addressUser" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">DISTRICT</label>
          <input placeholder="DISTRICT" type="text" v-model="address.district" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">PROVINCE</label>
          <input placeholder="PROVINCE" type="text" v-model="address.province" />
        </sui-form-field>
        <sui-form-field required>
          <label id="labelRegisUser">ZIP CODE</label>
          <input placeholder="ZIP CODE" type="text" v-model="address.zipcode" />
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
          emailUser : "",
          password : "",
          repeatPassword: "",
          firstnameUser : "",
          lastnameUser : "",
          phoneUser : "",
        }
      ],
      address : [
        {
          addressUser : "",
          district : "",
          province : "",
          zipcode : ""
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
          emailUser : this.Users.emailUser,
          password : this.Users.password,
          firstnameUser : this.Users.firstnameUser,
          lastnameUser : this.Users.lastnameUser,
          phoneUser : this.Users.phoneUser
        }
        let newaddress = [{
          addressUser : this.address.addressUser,
          district : this.address.district,
          province : this.address.province,
          zipcode : this.address.zipcode
        }]
        db.push(newUser).child('address').set(newaddress)

//athenticate
     await auth.createUserWithEmailAndPassword(newUser.emailUser, newUser.password)
                .then(
                  user => {
                    this.$router.replace('userlogin')
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