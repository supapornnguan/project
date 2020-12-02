<template lang="html">
  <div class="regisUser">
    
    <sui-form id="border1">
      <h1 id="H1">SIGN IN</h1>
        <sui-form-field required>
          <label id="labelRegisUser">EMAIL</label>
          <input 
            placeholder="EMAIL" 
            type="text" 
            v-model="Users.customer_emial"
          />
        </sui-form-field>
        <!-- check email if invalid email will show error -->
        <sui-message error visible v-if="Users.customer_emial==''" id="message" >
          <p style="font-weight:600; text-align:center">the email address is required</p>
        </sui-message>

        <sui-form-field required>
          <label id="labelRegisUser">PASSWORD</label>
          <input 
            placeholder="PASSWORD" 
            type="password" 
            v-model="Users.customer_password"
      />
        </sui-form-field>
        <!-- check length password -->
        <!-- <sui-message error visible v-if="checkLength" id="message" >
          <p style="font-weight:600; text-align:center">password must have at least 8 characters </p>
        </sui-message> -->

        <sui-form-field required>
          <label id="labelRegisUser">REPEAT PASSWORD</label>
          <input 
            placeholder="REPEAT PASSWORD" 
            type="password" 
            v-model="Users.repeatPassword"/>
        </sui-form-field>
      <!-- check repeatpassword -->
        <sui-message error visible v-if="Users.customer_password != Users.repeatPassword" id="message" >
          <p style="font-weight:600; text-align:center">password mismatch</p>
        </sui-message>

        <sui-form-field required>
          <label id="labelRegisUser">FIRSTNAME</label>
          <input 
            placeholder="FIRSTNAME" 
            type="text" 
            v-model="Users.customer_firstname" />
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">LASTNAME</label>
          <input 
            placeholder="LASTNAME" 
            type="text" 
            v-model="Users.customer_lastname" />
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">PHONE</label>
          <input 
            placeholder="PHONE" 
            type="number" 
            v-model="Users.customer_phonenumber"
            @change="checkPhone"/>
        </sui-form-field>
              <!-- check phone number -->
        <sui-message error visible v-if="checkPhonenum" id="message" >
          <p style="font-weight:600; text-align:center">Phone number is bad formated</p>
        </sui-message>

        <sui-form-field required>
          <label id="labelRegisUser">ADDRESS</label>
          <input 
            placeholder="ADDRESS" 
            type="text" 
            v-model="address.customer_address" />
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">DISTRICT</label>
          <input 
            placeholder="DISTRICT" 
            type="text" 
            v-model="address.customer_district" />
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">PROVINCE</label>
          <input 
            placeholder="PROVINCE" 
            type="text" 
            v-model="address.customer_province" />
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">ZIP CODE</label>
          <input 
            placeholder="ZIP CODE" 
            type="text" 
            v-model="address.customer_zipcode" />
        </sui-form-field>        
        <div class="ui submit button" @click="addUser();" style="margin-left:170px">Submit</div>
  </sui-form>
  </div>
</template>
<script>
import firebase from "../firebase";
import {auth} from  "../firebase";
export default {
  name: 'regisUser',
  data() {
    return {
      user:{},
      checkPhonenum : false,
      checkLength : false,
      useruid : "",
      Users : [
        {
          customer_emial : "",
          customer_password : "",
          repeatPassword: "",
          customer_firstname : "",
          customer_lastname : "",
          customer_phonenumber : "",
          address1 : []
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
    }
  },
  methods: {
     async addUser(){
        console.log(firebase)
        console.log("okokokokokok")
        let newaddress = [{
          customer_address : this.address.customer_address,
          customer_district : this.address.customer_district,
          customer_province : this.address.customer_province,
          customer_zipcode : this.address.customer_zipcode
        }]
        let newUser = {
          customer_emial : this.Users.customer_emial,
          customer_password : this.Users.customer_password,
          customer_firstname : this.Users.customer_firstname,
          customer_lastname : this.Users.customer_lastname,
          customer_phonenumber : this.Users.customer_phonenumber,
          address :  newaddress
        }
        
        

//athenticate
     await auth.createUserWithEmailAndPassword(newUser.customer_emial, newUser.customer_password)
          .then(
            user => {
              console.log("regis userrrr")
              console.log(user)
              this.useruid = auth.currentUser.uid
              console.log("this is uid of user" + this.useruid)
            }
          )
    await firebase.ref("user/" + this.useruid).set(newUser)
    .then((data) => {
      console.log(data)
      this.$router.replace('userlogin')
    })
      },
      checkPhone(){
        if(this.Users.customer_phonenumber.length != 10){
          return this.checkPhonenum = true
        }else if(this.Users.customer_phonenumber.length == 10){
          return this.checkPhonenum = false
        }
      },
  },
};
</script>

<style scoped>
#H1{
  margin-top: 5px;
  margin-bottom: 40px;
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
  width: 550px;
  margin: 0 auto;
}
.ui.submit.button{
  margin-left: 150px;
}
#message{
  border-style: none;
  padding: 2px;
  margin-top:-10px
}
#border1{
  border-radius: 10px;
  border: 1px solid #B5C7D3;
  padding: 50px;
  background-color: 	#B5C7D3;
}
</style>