<template lang="html">
  <div class="regisUser">
    
    <sui-form id="border1">
      <h1 id="H1">REGISTER</h1>
        <sui-form-field required>
          <label id="labelRegisUser">EMAIL</label>
          <input 
            placeholder="EMAIL" 
            type="text" 
            v-model="Users.customer_email"
            @change="checkEmailAddress" />
            <!-- check email if invalid email will show error -->
            <span is="sui-label" basic color="red" pointing v-if="Users.customer_email==''">Enter email</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkEmail">Invalid email</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">PASSWORD</label>
          <input 
            placeholder="PASSWORD" 
            type="password" 
            v-model="Users.customer_password" 
            @change="checkPassword" />
            <!-- check password -->
            <span is="sui-label" basic color="red" pointing v-if="Users.customer_password==''">Enter password</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkPasswordnum">Password must be have 8 characters</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">REPEAT PASSWORD</label>
          <input 
            placeholder="REPEAT PASSWORD" 
            type="password" 
            v-model="Users.repeatPassword"/>
            <!-- check repeatpassword -->
            <span is="sui-label" basic color="red" pointing v-if="Users.customer_password != Users.repeatPassword">Password mismatch</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">FIRSTNAME</label>
          <input 
            placeholder="FIRSTNAME" 
            type="text" 
            v-model="Users.customer_firstname" />
            <!-- check firstname -->
            <span is="sui-label" basic color="red" pointing v-if="Users.customer_firstname==''">Enter firstname</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">LASTNAME</label>
          <input 
            placeholder="LASTNAME" 
            type="text" 
            v-model="Users.customer_lastname" />
            <!-- check lastname -->
            <span is="sui-label" basic color="red" pointing v-if="Users.customer_lastname==''">Enter lastname</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">PHONE</label>
          <input 
            placeholder="PHONE" 
            type="number" 
            v-model="Users.customer_phonenumber"
            @change="checkPhone"/>
            <!-- check phone number -->
            <span is="sui-label" basic color="red" pointing v-if="Users.customer_phonenumber==''">Enter phone number</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkPhonenum">Phone number is bad formated</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">ADDRESS</label>
          <input 
            placeholder="ADDRESS" 
            type="text" 
            v-model="address.customer_address" />
            <!-- check address -->
            <span is="sui-label" basic color="red" pointing v-if="address.customer_address==''">Enter address</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">DISTRICT</label>
          <input 
            placeholder="DISTRICT" 
            type="text" 
            v-model="address.customer_district" />
            <!-- check district -->
            <span is="sui-label" basic color="red" pointing v-if="address.customer_district==''">Enter district</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">PROVINCE</label>
          <input 
            placeholder="PROVINCE" 
            type="text" 
            v-model="address.customer_province" />
            <!-- check province -->
            <span is="sui-label" basic color="red" pointing v-if="address.customer_province==''">Enter province</span>
        </sui-form-field>

        <sui-form-field required>
          <label id="labelRegisUser">ZIP CODE</label>
          <input 
            placeholder="ZIP CODE" 
            type="number" 
            v-model="address.customer_zipcode"
            @change="checkZipcode" />
            <!-- check zipcode -->
            <span is="sui-label" basic color="red" pointing v-if="address.customer_zipcode==''">Enter zipcode</span>
            <span is="sui-label" basic color="red" pointing v-else-if="checkZipcodenum">Invalid zipcode</span>
        </sui-form-field>        
        <div class="ui submit button" @click="addUser();" style="margin-left:170px">Submit</div>
  </sui-form>
  </div>
</template>
<script>
import firebase from "../firebase";
import {auth} from  "../firebase";
import {dateToString} from '../utils/utils';
export default {
  name: 'regisUser',
  data() {
    return {
      user:{},
      checkPhonenum : false,
      checkLength : false,
      checkzipcodenum : false,
      checkEmail : false,
      checkPasswordnum : false,
      useruid : "",
      Users : [
        {
          customer_email : "",
          customer_password : "",
          repeatPassword: "",
          customer_firstname : "",
          customer_lastname : "",
          customer_phonenumber : "",
          timestamp: "",
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
       this.Users.timestamp = Date.now();
        console.log(firebase)
        console.log("okokokokokok")
        let newaddress = [{
          customer_address : this.address.customer_address,
          customer_district : this.address.customer_district,
          customer_province : this.address.customer_province,
          customer_zipcode : this.address.customer_zipcode
        }]
        let newUser = {
          customer_email : this.Users.customer_email,
          customer_password : this.Users.customer_password,
          customer_firstname : this.Users.customer_firstname,
          customer_lastname : this.Users.customer_lastname,
          customer_phonenumber : this.Users.customer_phonenumber,
          timestamp : dateToString(this.Users.timestamp),
          address :  newaddress
        }
        
        

//athenticate
     await auth.createUserWithEmailAndPassword(newUser.customer_email, newUser.customer_password)
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
      this.$router.push({name: "home"})
    })
      },
      checkPhone(){
        if(this.Users.customer_phonenumber.length != 10){
          return this.checkPhonenum = true
        }else if(this.Users.customer_phonenumber.length == 10){
          return this.checkPhonenum = false
        }
      },
      checkZipcode(){
        if(this.address.customer_zipcode.length != 5){
          return this.checkZipcodenum = true
      }else if(this.address.customer_zipcode.length == 5){
          return this.checkZipcodenum = false
      }
      },
      checkEmailAddress(){
        if(!this.Users.customer_email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)){
          return this.checkEmail = true
      }else{
          return this.checkEmail = false
      }
      },
      checkPassword(){
        if(this.Users.customer_password.length != 8){
          return this.checkPasswordnum = true
      }else if(this.Users.customer_password.length == 8){
          return this.checkPasswordnum = false
      }
      }
  }
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